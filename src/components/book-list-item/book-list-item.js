import React from 'react';
import './book-list-item.css';


const BookListItem = ({books, onAddedToCart}) => {
    const {title, author, price, coverImage} = books;
    return (
        <div className="book-list-item">
            <div className="book-cover">
                <img src={coverImage} alt="cover"/>
            </div>
            <div className="book-details">
                <div className="inform">
                    <span className="book-title">{title}</span>
                    <div className="book-author">{author}</div>
                    <div className="book-price">${price}</div>
                </div>
                <div className="button">
                    <button onClick={onAddedToCart}>Add to cart</button>
                </div>
            </div>
        </div>
    )
}

export default BookListItem;