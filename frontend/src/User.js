import React, { useState } from "react";
import { Link } from "react-router-dom";


const User = () => {

    const [user, setUser] = useState([{
        Name: 'John', Email: "john@gmail.com", Age: 20
    }])

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
                                <th>Name</th>
                                <th>Email</th>
                                <th>Age</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                user.map((user) => {
                                    return <tr>
                                        <td>{user.Name}</td>
                                        <td>{user.Email}</td>
                                        <td>{user.Age}</td>
                                        <td>
                                            <Link to="/edit" className="btn btn-success">Edit</Link>
                                            <button type="button" class="btn btn-danger">Delete</button>
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