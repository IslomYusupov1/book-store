import React from 'react';
import './header-page.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMapMarkerAlt} from "@fortawesome/free-solid-svg-icons";



const HeaderPage = () => {
    return (
        <div className="Nav-bar">
            <div className="nav-left">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a>
                    <div className="map-icon">
                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                    </div>
                    <div className="deliver">
                        <span className="del">Deliver to</span><br/>
                        <span  className="con">Uzbekistan</span>
                    </div>
                </a>
            </div>
            <div className="nav-fill">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="1a">Products</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="2a">Sales</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="2a">Register</a>
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="3a">Favourites</a>
            </div>
        </div>
    )
}

export default HeaderPage;