import React from "react";
import {Nav} from 'react-bootstrap';

const Pagination = ( {postsPerPage, totalPosts, paginate} ) => {

    const pageNumbers = [];
    for(let i = 1; i <= Math.ceil(totalPosts/postsPerPage); i++ ){
        pageNumbers.push(i);
    }
    
    return (
        <div className="mr-2 mt-2 float-right">
            <ul className="pagination">
                {pageNumbers.map(number => (
                    <li key={number} className="page-item">
                        <a onClick={()=>paginate(number)}  className="page-link">
                            {number}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
  };

 
export default Pagination;