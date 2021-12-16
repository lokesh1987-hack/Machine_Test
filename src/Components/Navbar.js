import React from 'react'
import { Link } from 'react-router-dom'

function Navbar({View}) {
    return (
        <div>
            <nav className="navbar navbar-light" style={{ backgroundColor: "#e3f2fd" }}>
                <div className="container-fluid">
                    <span className="navbar-brand mb-0 h1">Employee Detail</span>
                <div>
                   <Link to="/adduser" class="btn btn-outline-success me-2" type="button">Add New Employee</Link>
                    <a onClick={()=>{View(false)}} className="btn btn-outline-success me-2" type="button">List</a>
                    <a onClick={()=>{View(true)}} to="/adduser" className="btn btn-outline-success me-2" type="button">Grid</a>
                </div>
                </div>
            </nav>
        </div>
    )
}

export default Navbar
