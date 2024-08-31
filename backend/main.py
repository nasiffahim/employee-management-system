from fastapi import FastAPI, APIRouter, HTTPException
from database.schemas import all_emp_data
from database.models import Employee
from config import collection
from bson.objectid import ObjectId

app = FastAPI()
router = APIRouter()



@router.get("/")
async def get_all_emp_info():
     data = collection.find( {"is_deleted": False} )
     return all_emp_data(data)


@router.post("/")
async def create_emp_info(new_employee: Employee):
    try:
        response = collection.insert_one(new_employee.dict())
        return {"status_code": 200, "id": str(response.inserted_id)}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Error Occured {e}")


@router.put("/{emp_id}")
async def edit_emp_info(emp_id: str, edit_emp_info: Employee):
    try:
        id = ObjectId(emp_id)
        existing_emp = collection.find_one({"_id":id})
        if not existing_emp:
            return HTTPException(status_code=404, detail=f"Employee ID does not exist")
        resp =collection.update_one({"_id": id}, {"$set": dict(edit_emp_info)})
        return {"status_code": 200, "message": "Task updated Successfully"}

    except Exception as e:
        return HTTPException(status_code=500, detail=f"Some Error Occured {e}")


@router.delete("/{emp_id}")
async def delete_emp_info(emp_id: str):
    try:
        id = ObjectId(emp_id)
        existing_emp = collection.find_one({"_id":id, "is_deleted": False})
        if not existing_emp:
            return HTTPException(status_code=404, detail=f"Employee ID does not exist")
        resp =collection.update_one({"_id": id}, {"$set": {"is_deleted": True}})
        return {"status_code": 200, "message": "Task updated Successfully"}

    except Exception as e:
        return HTTPException(status_code=500, detail=f"Some Error Occured {e}")


app.include_router(router)

