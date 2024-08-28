from fastapi import FastAPI, APIRouter, HTTPException
from database.schemas import all_emp_data
from database.models import Employee
from config import collection

app = FastAPI()
router = APIRouter()



@router.get("/")
async def get_all_emp_info():
     data = collection.find( )
     return all_emp_data(data)


@router.post("/")
async def create_emp_info(new_employee: Employee):
    try:
        response = collection.insert_one(new_employee.dict())
        return {"status_code": 200, "id": str(response.inserted_id)}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Error Occured {e}")

app.include_router(router)

