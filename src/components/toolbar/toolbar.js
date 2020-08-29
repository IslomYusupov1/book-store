import React from 'react'
import './toolbar.css'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faShoppingCart, faSearch} from "@fortawesome/free-solid-svg-icons";
import {Link} from "react-router-dom";

const Toolbar = ({drawerClickHandler, numItems, total}) => {
    return (
        <header className="toolbar">
            <nav className="toolbar-navigation">
                <div className="toggle-button">
                    <FontAwesomeIcon icon={faBars} onClick={drawerClickHandler}/>
                </div>
                <div className="toolbar-logo">

                    <h2>Book </h2>
                    <h2>Book </h2>

                </div>
                <div className="toolbar-logo1">

                    <h2>Store</h2>
                    <h2>Store</h2>

                </div>
                <div className="search-panel">
                    <input id="searchInput" className="search-input" type="text"/>
                    <i className="search-btn"><FontAwesomeIcon icon={faSearch}/></i>
                </div>
                <div className="spacer"/>
                <div className="toolbar-navigation-item">
                    <ul>
                        <li><Link to="./"><span className="h">Home</span></Link></li>
                        <li><Link to="./books"><span className="h">Books</span></Link></li>
                        <li><Link to="./sign-in"><span className="h">Log In</span></Link></li>
                        <li>
                            <Link to="./cart">
                                <span className="l"><FontAwesomeIcon icon={faShoppingCart}/>
                                    {numItems} items (${total})</span>
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default Toolbar;