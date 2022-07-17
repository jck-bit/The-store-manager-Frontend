import requests

BASE = "http://127.0.0.1:5000/"

response = requests.get(BASE + "products", auth=("admin", "thisispassword"))
print(response.json())

post_requests = requests.post(BASE + "products", auth=("admin", "thisispassword"), json={"name": "test", "price": "10"})
print(post_requests.json())
