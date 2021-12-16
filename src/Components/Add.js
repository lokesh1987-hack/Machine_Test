import axios from 'axios';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Add() {
    const navigate = useNavigate();

    const [userData, setUserData] = useState({
        first_name: "",
        last_name: "",
        email: "",
    })

    const { first_name, last_name, email } = userData;
    const OnChange = (e) => {
        setUserData({ ...userData, [e.target.name]: e.target.value }) 
    }

    const submit = async (e) => {
        e.preventDefault()
        await axios.post("http://localhost:3001/employees", userData)
        navigate('/');
    }


    return (
        <div>
            <div className="text-center m-5">
                <h1>Add User</h1>
            </div>
            <div className="container border shadow p-5 w-50">
                <form  onSubmit={e => submit(e)}>
                    <div className="mb-3">
                        <label for="first_name" className="form-label">First Name </label>
                        <input name="first_name" value={first_name} type="name" onChange={e => OnChange(e)} className="form-control" id="first_name" required />
                       
                    </div>
                    <div className="mb-3">
                        <label for="last_name" className="form-label">Last Name </label>
                        <input name="last_name" value={last_name} type="name" onChange={e => OnChange(e)} className="form-control" id="last_name" required />
                     
                    </div>
                    <div className="mb-3">
                        <label for="email" className="form-label">Email id </label>
                        <input name="email" value={email} type="email" onChange={e => OnChange(e)} className="form-control" id="email" required />
                    </div>
                    <div className="mb-3 d-flex ">
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Add