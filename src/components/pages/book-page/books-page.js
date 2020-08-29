import React from 'react';
import './books-page.css';
import BookList from "../../book-list";


const BooksPage = () => {
    return (
        <div className="c">
             <span className="book-list"><BookList/></span>
        </div>
    )
}

export default BooksPage;
