from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://admin:admin123!@employeemanagementsyste.cepkk.mongodb.net/?retryWrites=true&w=majority&appName=EmployeeManagementSystem"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))


db = client.emp_mng_db
collection = db["emp_data"]