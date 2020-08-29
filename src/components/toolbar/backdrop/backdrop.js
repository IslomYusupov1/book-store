import  React from 'react';
import './backdrop.css';



const BackDrop = ({click}) => {
    return (
        <div className="backdrop" onClick={click}/>
    )
}

export default BackDrop;