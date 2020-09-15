import React from 'react'

export const Pagenation = ({ postPerPage, totalPosts, paginate, page }) => {
    const pageNumbers = []
    const active = 'page-item'
    const disabled = 'page-item disabled'

    for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
        pageNumbers.push(i);
    }


    return (

        <nav>
            <ul className="pagination">
                <li className={page > 1 ? active : disabled}>
                    <a onClick={() => paginate(page - 1)}
                        className="page-link" href="# " >Previous</a>
                </li>
                {pageNumbers.map(number => (
                    <li key={number}
                        className={page === number ?
                            'page-item active' :
                            'page-item'}>
                        <a onClick={() => paginate(number)}
                            href="# " className="page-link">{number}</a>
                    </li>
                ))}

                <li className={page < pageNumbers.length ? active : disabled }>
                    <a onClick={() => paginate(page + 1)}
                        href="# " className="page-link">Next</a>
                </li>
            </ul>
        </nav>
    )
}

export default Pagenation