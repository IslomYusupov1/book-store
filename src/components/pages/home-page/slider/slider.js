import React, {useState} from 'react';
import './slider.css';
import ImgComp from "./img-comp";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faChevronLeft, faChevronRight} from "@fortawesome/free-solid-svg-icons";
import I1 from './images/6.jpg';
import I2 from './images/7.jpg';
import I3 from './images/8.jpg';
import I4 from './images/9.png';
import I5 from './images/5.jpg';


const Slider = () => {

    let sliderArr = [
        <i><ImgComp src={I1}/></i>,
        <i><ImgComp src={I2}/></i>,
        <i><ImgComp src={I3}/></i>,
        <i><ImgComp src={I5}/></i>,
        <i><ImgComp src={I4}/></i>
    ]
    const [x, setX] = useState(0);
    const goLeft = () => {
        x === 0 ? setX(-100 * (sliderArr.length - 1)) : setX(x + 100);
    }
    const goRight = () => {
        x === -100 * (sliderArr.length - 1) ? setX(0) : setX(x - 100);
    }
    return (
        <div className="slider">
            {sliderArr.map((item, index) => {
                return (
                    <div key={index} className="slide" style={{transform: `translateX(${x}%)`}}>
                        {item}
                    </div>
                )
            })
            }
            <button className="left-button" onClick={goLeft}>
                <span className="left-icon">
                    <FontAwesomeIcon icon={faChevronLeft}/>
                </span>
            </button>
            <button className="right-button" onClick={goRight}>
                <span className="right-icon">
                    <FontAwesomeIcon icon={faChevronRight}/>
                </span>
            </button>
        </div>
    )
}

export default Slider;