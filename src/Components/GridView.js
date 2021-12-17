import React from 'react'
import { Link } from 'react-router-dom'

function GridView({ employees, Delete }) {
    return (
        <div>
            <div class="container m-5 mx-auto">
                <div className="row row-cols-1 row-cols-md-3 g-4 p-5">
                    {employees.map((employee, index) => {
                        const { id, first_name, last_name } = employee
                        return (
                            <div key={index}>
                                <div class="col">
                                    <div class="card h-100" style={{ width: "18rem" }}>
                                        <div class="card-body">
                                            <img src="data:image/jpeg;base64,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" class="card-img-top" alt="Image Not Found" />
                                            <div className="d-flex mt-3 mb-3">

                                                <h5 class="card-title me-auto">{first_name} {last_name}</h5>
                                                <img src="https://cdn.searchenginejournal.com/wp-content/uploads/2021/08/a-guide-to-star-ratings-on-google-and-how-they-work-6123be39b9f2d-sej.jpg" class="card-img-top w-25" alt="Image Not Found" />

                                            </div>
                                            <Link to={`/viewuser/${id}`} class="btn btn-outline-primary me-2">View</Link>
                                            <Link to={`/updateuser/${id}`} class="btn btn-outline-primary me-2">Update</Link>
                                            <button onClick={() => Delete(id)} class="btn btn-outline-danger me-2">Delete</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default GridView
