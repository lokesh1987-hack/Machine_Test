import axios from 'axios'
import React from 'react'
import GridView from './GridView'
import ListView from './ListView'

function Cards({ employees, gridView,fetchingdata }) {
    console.log("gridView=",gridView)

    const Delete = async(id) =>{
        await axios.delete(`http://localhost:3001/employees/${id}`)
        fetchingdata();
    }

    return (
        <div>
            <div>
                {(gridView ===true)?<GridView employees={employees} Delete={Delete} />:<ListView employees={employees} Delete={Delete}/>}
            </div>
        </div>
    )
}

export default Cards
