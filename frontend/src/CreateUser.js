import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import { createEmpInfo } from "./rest";

const CreateUser = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        age: '',
        currentAddress: '',
        permanentAddress: '',
        email: '',
        role: '',
        gender: '',
        image: null,
    });

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'file' ? files[0] : value,
        });
    };

    const validateForm = () => {
        const newErrors = {};
        if (!formData.firstName) newErrors.firstName = "First Name is required";
        if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) newErrors.email = "Valid Email is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validateForm()) {
            console.log("Form data submitted:", formData);
            createEmpInfo(formData)
                .then(() => {
                    navigate("/"); 
                })
                .catch((error) => {
                    console.error("Error creating user:", error);
                });
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
                            <Link to="/" className="btn btn-primary">Home</Link>
                        </li>
                    </ul>
                </div>
            </nav>


           <div className="d-flex h-100 justify-content-center align-items-center">
            <div className="container-fluid">
                <div className="bg-white rounded p-4">
                    <form onSubmit={handleSubmit}>
                        <h2 className="mb-4">Add User</h2>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="firstName">First Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter First Name"
                                    className="form-control"
                                    id="firstName"
                                    name="firstName"
                                    value={formData.firstName}
                                    onChange={handleChange}
                                />
                                {errors.firstName && <div className="text-danger">{errors.firstName}</div>}
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="lastName">Last Name</label>
                                <input
                                    type="text"
                                    placeholder="Enter Last Name"
                                    className="form-control"
                                    id="lastName"
                                    name="lastName"
                                    value={formData.lastName}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="age">Age</label>
                                <input
                                    type="text"
                                    placeholder="Enter Age"
                                    className="form-control"
                                    id="age"
                                    name="age"
                                    value={formData.age}
                                    onChange={handleChange}
                                />
                            </div> 
                            <div className="col-md-6">
                                <label htmlFor="email">Email</label>
                                <input
                                    type="email"
                                    placeholder="Enter Email"
                                    className="form-control"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                                {errors.email && <div className="text-danger">{errors.email}</div>}
                            </div>
                            
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="currentAddress">Current Address</label>
                                <input
                                    type="text"
                                    placeholder="Enter Current Address"
                                    className="form-control"
                                    id="currentAddress"
                                    name="currentAddress"
                                    value={formData.currentAddress}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="permanentAddress">Permanent Address</label>
                                <input
                                    type="text"
                                    placeholder="Enter Permanent Address"
                                    className="form-control"
                                    id="permanentAddress"
                                    name="permanentAddress"
                                    value={formData.permanentAddress}
                                    onChange={handleChange}
                                />
                            </div>                           
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label htmlFor="image">Upload Image</label>
                                <input
                                    type="file"
                                    className="form-control"
                                    id="imageUpload"
                                    name="image"
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="col-md-6">
                                <label htmlFor="role">Role</label>
                                <select
                                    className="form-select"
                                    id="role"
                                    name="role"
                                    value={formData.role}
                                    onChange={handleChange}
                                >
                                    <option value="">Select Role</option>
                                    <option value="admin">Admin</option>
                                    <option value="user">User</option>
                                    <option value="guest">Guest</option>
                                </select>
                            </div>
                        </div>

                        <div className="row mb-3">
                            <div className="col-md-6">
                                <label>Gender</label>
                                <div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="male"
                                            value="male"
                                            checked={formData.gender === 'male'}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="male">Male</label>
                                    </div>
                                    <div className="form-check form-check-inline">
                                        <input
                                            className="form-check-input"
                                            type="radio"
                                            name="gender"
                                            id="female"
                                            value="female"
                                            checked={formData.gender === 'female'}
                                            onChange={handleChange}
                                        />
                                        <label className="form-check-label" htmlFor="female">Female</label>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <button type="submit" className="btn btn-success mt-3">Submit</button>
                    </form>
                </div>
            </div>
        </div> 
        </div>
        
    );
};

export default CreateUser;
