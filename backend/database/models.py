from pydantic import BaseModel
from datetime import datetime

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
    is_deleted: bool = False
    # create_time: int = int(datetime.timestamp(datetime.now))
    # update_time: int = int(datetime.timestamp(datetime.now))

