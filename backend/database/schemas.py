def parse_emp_data(info):
    return {
        "id": str(info["_id"]),
        "firstName": info["firstName"],
        "lastName": info["lastName"],
        "age": str(info["age"]),
        "currentAddress": info["currentAddress"],
        "permanentAddress": info["permanentAddress"],
        "email": info["email"],
        "is_deleted": info["is_deleted"]
    }

def all_emp_data(infos):
    return [parse_emp_data(info) for info in infos]



def emp_data(info):
    return {
        "id": str(info["_id"]),
        "firstName": info["firstName"],
        "lastName": info["lastName"],
        "age": str(info["age"]),
        "currentAddress": info["currentAddress"],
        "permanentAddress": info["permanentAddress"],
        "email": info["email"],
        "image": info.get("image"),
        "is_deleted": info["is_deleted"]
    }

