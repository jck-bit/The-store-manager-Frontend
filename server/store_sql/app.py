from functools import wraps
from textwrap import wrap
from flask import Flask, request, jsonify, make_response
from flask_sqlalchemy import SQLAlchemy
from werkzeug.security import generate_password_hash, check_password_hash
import uuid
import jwt
import datetime
from functools import wraps

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

app.config['SECRET_KEY'] = 'thisissecret'

db = SQLAlchemy(app)

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    public_id = db.Column(db.String(50), unique=True)
    name = db.Column(db.String(50))
    password = db.Column(db.String(50))
    admin = db.Column(db.Boolean)

class Sales(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    total_sales = db.Column(db.Integer)
    user_id = db.Column(db.Integer)


def token_required(f):
    @wraps(f)
    def decorated(*args, **kwargs):
        token = None

        if 'x-access-token' in request.headers:
            token = request.headers['x-access-token']

        if not token:
            return jsonify({'message': 'Token is missing!'}), 401
        try:
            data = jwt.decode(token, app.config['SECRET_KEY'])
            current_user = User.query.filter_by(public_id=data['public_id']).first()
        
        except:
            return jsonify({'message': 'Token is invalid!'}), 401
        
        return f(current_user, *args, **kwargs)

    return decorated
 
@app.route('/')
def welcome():
    return 'Welcome to the Sales API'

@app.route('/user', methods=['POST'])
def create_user():
    data = request.get_json()
    hashed_password = generate_password_hash(data['password'], method='sha256')

    new_user = User(public_id=str(uuid.uuid4()), name=data['name'], password=hashed_password, admin=False)

    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'New user created!'})
 
@app.route('/users/<public_id>')
def get_one_user(public_id):
    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({'message': 'No user found'})

    user_data = {}
    user_data['public_id'] = user.public_id
    user_data['name'] = user.name
    user_data['password'] = user.password
    user_data['admin'] = user.admin

    return jsonify(user_data)
   
 
@app.route('/users', methods=['GET'])
def get_all_users():
    users = User.query.all()

    output = []

    for user in users:
        user_data = {}
        user_data['public_id'] = user.public_id
        user_data['name'] = user.name
        user_data['password'] = user.password
        user_data['admin'] = user.admin
        output.append(user_data)

    return jsonify({'users': output}) 
    

@app.route('/users/<public_id>', methods=['PUT'])
def promote_user(public_id):
    user = User.query.filter_by(public_id=public_id).first()

    if not user:
        return jsonify({"message":"No user found"})

    user.admin = True
    db.session.commit()

    return jsonify({"message":"User has been promoted"})


@app.route('/user/<public_id>', methods=['DELETE'])
def delete_user(public_id):
    user = User.query.filter_by(public_id = public_id).first()

    if not user:
        return jsonify({"message":"No user found"})
    
    db.session.delete(user)
    db.session.commit()

    return jsonify({"message":"User has been deleted"})


@app.route('/login')
def login():
    auth = request.authorization

    if not auth or not auth.username or not auth.password:
        make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})
    
    user = User.query.filter_by(name=auth.username).first()

    if not user:
        return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})
    
    if check_password_hash(user.password, auth.password):
        token = jwt.encode({'public_id': user.public_id, 'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=30)}, app.config['SECRET_KEY'])

        return jsonify({' Your token': token.decode('UTF-8')})

    return make_response('Could not verify', 401, {'WWW-Authenticate': 'Basic realm="Login required"'})


@app.route('/sales', methods=['POST'])
@token_required
def create_sale(current_user):
    data = request.get_json()

    new_sale = Sales(name=data['name'], total_sales=data['total_sales'], user_id=current_user.id)

    db.session.add(new_sale)
    db.session.commit()

    return jsonify({'message': 'New sale created!'})

@app.route('/sales', methods=['GET'])
@token_required
def get_all_sales(current_user):
    sales = Sales.query.filter_by(user_id=current_user.id).all()

    output = []

    for sale in sales:
        sale_data = {}
        sale_data['name'] = sale.name
        sale_data['total_sales'] = sale.total_sales
        sale_data['user_id'] = sale.user_id
        output.append(sale_data)

    return jsonify({'sales': output})


if __name__ == '__main__':
    app.run(debug=True)
