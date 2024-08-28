def emp_data(info):
    return {
        "id": str(todo["_id"]),
        "firstName": todo["firstName"],
        "lastName": todo["lastName"],
        "age": str(todo["age"]),
        "currentAddress": todo["currentAddress"],
        "permanentAddress": todo["permanentAddress"],
        "email": todo["email"],
    }

def all_emp_data(infos):
    return [emp_data(info) for info in infos]