import React from 'react';
import './home-page.css';
import Slider from "./slider";


const HomePage = () => {

    return (
        <div>
            <span className="slider-home"><Slider/></span>
            <div>
            <button className="menu-btn">

                <div className="span line_1"/>
                <div className="span line_2"/>
                <div className="span line_3"/>

                <i className="fa fa-facebook" aria-hidden="true"/>
                <i className="fa fa-telegram" aria-hidden="true"/>
                <i className="fa fa-instagram" aria-hidden="true"/>

            </button>
            </div>
        </div>
    )
}

export default HomePage;

