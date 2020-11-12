import React from 'react';

import classes from './Order.module.css';

const order = (props) => (
    <div className={classes.Order}>
        <p>Ingredients : {props.ingredients} </p>
        <p><strong>Price : Rp. {props.price} </strong></p>
    </div>
);

export default order; 