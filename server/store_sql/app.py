from functools import wraps
from flask import Flask, request, jsonify
from flask_sqlalchemy import SQLAlchemy
from flask_cors import CORS
from werkzeug.security import generate_password_hash, check_password_hash, safe_str_cmp
import uuid
import datetime
from flask_jwt_extended import JWTManager, jwt_required, create_access_token, get_jwt_identity

app = Flask(__name__)

app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///test.db'
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False
app.config['SECRET_KEY'] = 'thisissecret'

db = SQLAlchemy(app)
CORS(app)
jwt = JWTManager(app)

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

class Product(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50))
    price = db.Column(db.Integer)
    Quantity = db.Column(db.Integer)




@app.route('/login', methods=['POST'])
def login():
    if not request.is_json:
        return jsonify({"msg": "Missing JSON in request"}), 400

    username = request.json.get('username', None)
    password = request.json.get('password', None)

   

    if not username or not password:
        return jsonify({"msg": "Missing username or password"}), 400

    user = User.query.filter_by(name=username).first()
    if not user:
        return jsonify({"msg": "User does not exist"}), 400
    
    # if user and safe_str_cmp(user.password.encode('utf-8'), password.encode('utf-8')):
    #     access_token = create_access_token(identity=user.id)
    #     return jsonify(access_token=access_token), 200

    return jsonify({"msg": "You are Logged in"}), 200
    

    
    
    



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


@app.route('/products', methods=['POST'])
def post_product():
    data = request.get_json()

    new_product = Product(name=data['name'], price=data['price'], Quantity=data['Quantity'])

    db.session.add(new_product)
    db.session.commit()

    return jsonify({'message': 'New product Added!'})

@app.route('/products', methods=['GET'])
def get_all_products():
    products = Product.query.all()

    output = []

    for product in products:
        
        product_data = {}
        product_data['name'] = product.name
        product_data['price'] = product.price
        product_data['Quantity'] = product.Quantity
        output.append(product_data)

    return jsonify({'products': output})

@app.route('/products/<name>', methods=['GET'])
def get_one_product(name):
    product = Product.query.filter_by(name=name).first()

    if not product:
        return jsonify({'message': 'No product found'})

    product_data = {}
    product_data['name'] = product.name
    product_data['price'] = product.price
    product_data['Quantity'] = product.Quantity

    return jsonify(product_data)

@app.route('/products/<name>', methods=['PUT'])
def update_product(name):
    data = request.get_json()

    product = Product.query.filter_by(name=name).first()

    if not product:
        return jsonify({'message': 'No product found'})

    product.name = data['name']
    product.price = data['price']
    product.Quantity = data['Quantity']

    db.session.commit()

    return jsonify({'message': 'Product has been updated!'})


@app.route('/products/<name>', methods=['DELETE'])
def delete_product(name):
    product = Product.query.filter_by(name=name).first()

    if not product:
        return jsonify({'message': 'No product found'})

    db.session.delete(product)
    db.session.commit()

    return jsonify({'message': 'Product has been deleted!'})

#create sale and the user_id is the user who is logged in





if __name__ == '__main__':
    app.run(debug=True)
