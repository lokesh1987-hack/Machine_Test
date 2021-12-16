import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import axios from 'axios'
import Cards from './Cards'
import Pagination from './Pagination'


function Home() {

    const [employees, setEmployees] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [perPageData, setPerPageData] = useState(10)
    const [ gridView , setGridView] = useState(false)

    useEffect(() => {
        fetchingdata()
    }, [])

    const fetchingdata = async () => {
        const result = await axios.get("http://localhost:3001/employees/")
        setEmployees(result.data)
    }
    const indexOfLastCard = currentPage * perPageData
    const indexOfFirstCard = indexOfLastCard - perPageData;
    const currentCard = employees.slice(indexOfFirstCard, indexOfLastCard)

    const paginate = (pageNumber) =>{setCurrentPage(pageNumber)}
    const View= (value) =>{setGridView(value)}

    return (
        <div className="mx-center">
            <div>
                <Navbar View={View}/>
            </div>
            <Cards employees={currentCard} fetchingdata={fetchingdata} gridView={gridView} />
            <Pagination perPageData={perPageData} totalCards={employees.length} paginate={paginate}/>
        </div>
    )
}

export default Home
