import React from 'react';

const Service = (props) => {
    const {id,name,price,description,img} = props.service;
    return (
        <div>
            <h3>Single Service</h3>
            <div>
                <img src={img} alt="" />
                <p>{id}</p>
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    );
};

export default Service;