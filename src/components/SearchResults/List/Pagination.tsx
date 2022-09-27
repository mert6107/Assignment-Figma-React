import React from 'react'
import '../../../styles/SearchResults/Pagination.css'

function Pagination({totalSearch,paginate,currentPage}:any) {
    const pageNumbers:any = []
    const totalPosts = totalSearch
    const postsPerPage = 6
    for(let i=1;i<=Math.ceil(totalPosts / postsPerPage); i++){
        pageNumbers.push(i)
    }
  return (
    <div>
        <nav>
            <ul className='pagUl'>
                {pageNumbers.map((number:any)=>{
                      return(
                          <>
                          <li key={number}   className={`page-item ${currentPage === number ? "p-active" : ""}`}  >
                              <a onClick={()=>paginate(number)} href="#" className='page-link'>
                                  {number}
                              </a>
                          </li>
                          </>
                      )
                })}
            </ul>
        </nav>
    </div>
  )
}

export default Pagination