import React, {Component} from 'react';
import './book-list.css';
import BookListItem from "../book-list-item";
import {connect} from 'react-redux'
import withBookstoreService from "../hoc";
import {fetchBooks, bookAddedToCart} from "../../actions/books_actions";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";


const BooksList = ({books, onAddedToCart}) => {

    return (
        <ul className="book-list">
            {books ? books.map((book) => {
                return (
                    <li key={book.id}><span className="key">key={book.id}</span>
                        <BookListItem
                            books={book}
                            onAddedToCart={() => onAddedToCart(book.id)}
                        /></li>
                )
            }) :null
            }
        </ul>
    )
};

class BookListContainer extends Component {

    componentDidMount() {
        this.props.fetchBooks()
    }

    render() {
        const {books, loading, error, onAddedToCart} = this.props;

        if (loading) {
            return <span className="spinner"> <Spinner/> </span>
        }
        if (error) {
            return <span className="error"> <ErrorIndicator/> </span>
        }

        return <BooksList books={books} onAddedToCart={onAddedToCart}/>
    }
}

const mapStateToProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    }
};
const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
        fetchBooks: fetchBooks(bookstoreService, dispatch),
        onAddedToCart: (id) => dispatch(bookAddedToCart(id))
    };
};

export default withBookstoreService()(
    connect(mapStateToProps,
        mapDispatchToProps)(BookListContainer));