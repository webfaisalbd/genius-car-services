import React from 'react';
import './Service.css'
const Service = (props) => {
    const {id,name,price,description,img} = props.service;
    return (
        <div>
            
            <div className='service'>
                <img src={img} alt="" />
                <h3>{name}</h3>
                <p>{price}</p>
                <p><small>{description}</small></p>
                <button>Book:  {name}</button>
            </div>
        </div>
    );
};

export default Service;