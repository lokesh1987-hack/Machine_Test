import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'

function View() {

    const { id } = useParams()
    // console.log(id)

    const [employees, setEmployees] = useState([])

    useEffect(() => {
        fetchingdata()
    }, [])

    const fetchingdata = async () => {
        const result = await axios.get(`http://localhost:3001/employees/${id}`)
        setEmployees([result.data])

    }



    return (
        <div>
            <div className="text-center m-5">
                <h1>View User</h1>
            </div>
            <div className="container border shadow p-5 w-50">
                {employees.map((employee, index) => {
                    const { id, first_name, last_name, email } = employee
                    return (
                        <div key={index}>
                            <div className="mb-3">
                                <label for="first_name" className="form-label">Id :</label>
                                <label for="first_name" className="form-label">{id} </label>

                            </div>
                            <div className="mb-3">
                                <label for="last_name" className="form-label">First Name : </label>
                                <label for="first_name" className="form-label">{first_name} </label>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Last Name : </label>
                                <label for="first_name" className="form-label">{last_name}</label>
                            </div>
                            <div className="mb-3">
                                <label for="email" className="form-label">Email id : </label>
                                <label for="first_name" className="form-label">{email}</label>
                            </div>
                            <div className="mb-3">
                                <Link to="/" className="btn btn-outline-success me-2">Back to home</Link>
                            </div>
                        </div>
                    )
                })}


            </div>
        </div>
    )
}

export default View
