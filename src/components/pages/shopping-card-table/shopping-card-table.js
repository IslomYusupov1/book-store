import React from 'react';
import './shopping-card-table.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faTrash, faMinusCircle, faPlusCircle} from "@fortawesome/free-solid-svg-icons";
import {connect} from 'react-redux';
import {bookAddedToCart, allBooksRemovedFromCart, bookRemovedFromCart} from "../../../actions/books_actions";

const ShoppingCardTable = ({items, total, onIncrease, onDecrease, onDelete}) => {

    const renderRow = (item, idx) => {
        const {id, title, count, total} = item
        return (
            <tr key={id}>
                <td>{idx + 1}</td>
                <td>{title}</td>
                <td>{count}</td>
                <td>${total}</td>
                <td>
                    <button onClick={() => onDelete(id)}
                            className="btn btn-outline-danger btn-secondary"><FontAwesomeIcon
                        icon={faTrash}/></button>
                    <button onClick={() => onIncrease(id)}
                            className="btn btn-outline-success btn-secondary"><FontAwesomeIcon
                        icon={faPlusCircle}/></button>
                    <button onClick={() => onDecrease(id)}
                            className="btn btn-outline-warning btn-secondary"><FontAwesomeIcon
                        icon={faMinusCircle}/></button>
                </td>
            </tr>
        )
    }
    return (
        <div className="shopping-card-table">
            <h2>Your Order</h2>
            <table className="table">
                <tbody>
                <tr>
                    <td>#</td>
                    <td>Item</td>
                    <td>Count</td>
                    <td>Price</td>
                    <td>Action</td>
                </tr>
                {items ? items.map(renderRow) : null}
                </tbody>
            </table>
            <div className="total">
                Total: ${total}
            </div>
        </div>
    )
}


const mapStateToProps = ({cartItems, orderTotal}) => {
    return {
        items: cartItems,
        total: orderTotal,
    }
}

const mapDispatchToProps = {
    onIncrease: bookAddedToCart,
    onDecrease: bookRemovedFromCart,
    onDelete: allBooksRemovedFromCart
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCardTable);
