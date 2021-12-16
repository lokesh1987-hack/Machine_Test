import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function Update() {
    const { id } = useParams()
    console.log('id',id)
    const navigate = useNavigate()

    const [oldData,setOldData] = useState({
        first_name:'',
        last_name:'',
        email:''
    })

    useEffect(()=>{
        update();
    },[])

    const update = async() =>{
        const result = await axios.get(`http://localhost:3001/employees/${id}`)
        console.log(result.data)
        setOldData(result.data)
    }

    const {first_name,last_name,email} = oldData

    const OnChange = (e)=>{
        setOldData({...oldData,[e.target.name]:e.target.value})
    }
    const submit = async (e) => {
        e.preventDefault()
        await axios.put(`http://localhost:3001/employees/${id}`, oldData)
        navigate('/');
    }

    return (
        <div>
            <div className="text-center m-5">
                <h1>Update User</h1>
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

export default Update
