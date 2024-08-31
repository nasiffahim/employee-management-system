import axios from 'axios';

const apiUrl = process.env.REACT_APP_BACKEND_URL + "/employees"

export const getAllEmpInfo = async () => {
    try {
        const response = await axios.get(`${apiUrl}/`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employee info:', error);
        throw error;
    }
};

export const createEmpInfo = async (newEmployee) => {
    try {
        const response = await axios.post(`${apiUrl}/`, newEmployee);
        return response.data;
    } catch (error) {
        console.error('Error creating employee info:', error);
        throw error;
    }
};

export const getEmpInfo = async (empId) => {
    try {
        const response = await axios.get(`${apiUrl}/${empId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching employee info by ID:', error);
        throw error;
    }
};

export const editEmpInfo = async (empId, editEmpInfo) => {
    try {
        const response = await axios.put(`${apiUrl}/${empId}`, editEmpInfo);
        return response.data;
    } catch (error) {
        console.error('Error editing employee info:', error);
        throw error;
    }
};


export const deleteEmpInfo = async (empId) => {
    try {
        const response = await axios.delete(`${apiUrl}/${empId}`);
        return response.data;
    } catch (error) {
        console.error('Error deleting employee info:', error);
        throw error;
    }
};
