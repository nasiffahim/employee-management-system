from pydantic import BaseModel
from datetime import datetime, date

class Employee(BaseModel): 
    firstName: str
    lastName: str
    age: int
    currentAddress: str
    permanentAddress: str
    email: str
    image: str
    image_name: str 
    role: str
    gender: str
    joiningDate: str
    is_deleted: bool = False

