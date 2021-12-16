import React from 'react'

function Pagination({ perPageData, totalCards, paginate }) {
    // console.log(perPageData, totalCards)

    const pageNumber = []

    for (let i = 1; i <= Math.ceil(totalCards / perPageData); i++) {
        pageNumber.push(i)
    }

    return (
        <div className="container">
            <div className="d-flex justify-content-center">
                <ul class="pagination" >
                    {pageNumber.map((number) => {
                        return (<li key={number} class="page-item"><a onClick={() => paginate(number)} class="page-link">{number}</a></li>)
                    })}
                </ul>
            </div>
        </div>
    )
}

export default Pagination
