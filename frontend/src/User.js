import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { getAllEmpInfo, deleteEmpInfo } from "./rest";


const User = () => {
  const navigate = useNavigate();

  const [user, setUser] = useState([])

  useEffect(() => {
    const fetchData = async() => {
      const data = await getAllEmpInfo();
      setUser(data)
    }
    fetchData();
  }, [])
  

  const handleDelete = async (empId) => {
    try {
      await deleteEmpInfo(empId);
      const updatedUsers = user.filter(u => u.id !== empId);
      setUser(updatedUsers);
    } catch (error) {
      console.error('Error deleting employee info:', error);
    }
  };

  return (

      <div>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <a className="navbar-brand" href="/">Employee Management System</a>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse d-flex flex-row-reverse" id="navbarNav">
                  <ul className="navbar-nav" >
                      <li className="nav-item active">
                          <Link to="/create" className="btn btn-primary">Add New Employee</Link>
                      </li>
                  </ul>
              </div>
          </nav>

          <div className="d-flex h-100 justify-content-center align-items-center">
              <div style={{ width: '95%', height: '550px' }} className="bg-white rounded p-3">                    
                  <table className="table">
                          <thead>
                          <tr>
                              <th>Profile Picture</th>
                              <th>Name</th>
                              <th>Email</th>
                              <th>Age</th>
                              {/* <th>J Date</th>                              */}
                              <th>Action</th>                             
                                                          
                          </tr>
                      </thead>
                      <tbody>
                          {
                              user?.map((user) => {
                                  return <tr>
                                      {user.image !== null ? <td><img src={user.image} height={"30px"} width={"30px"} /></td> : <div></div>}
                                      <td>{user.firstName}{' '}{user.lastName}</td>
                                      <td>{user.email}</td>
                                      <td>{user.age}</td>                                      
                                      {/* <td>{user.joiningDate}</td>                                       */}
                                      <td>
                                          <Link to={`/edit/${user.id}`} className="btn btn-success">Edit</Link>
                                          <button onClick={() => handleDelete(user.id)} type="button" class="btn btn-danger">Delete</button>
                                      </td>
                                  </tr>
                              })
                          }
                      </tbody>
                  </table>
              </div>
          </div>
      </div>          
  )
}

export default User;