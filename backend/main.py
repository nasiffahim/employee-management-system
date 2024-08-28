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


@router.post("/create")
async def create_emp_info(Employee):
    try:
        response = collection.insert_one(dict(create_emp_info))
        return {"status_code": 200, "id": response.inserted_id}
    except Exception as e:
        return HTTPException(status_code=500, detail=f"Error Occured {e}")

app.include_router(router)

