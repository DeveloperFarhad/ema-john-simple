import React from 'react';

const Cart = (props) => {
    const cart = props.cart;
    console.log(cart)
    const totalPrice = cart.reduce((total, prd) => total + prd.price, 0);

    let shipping = 0;
    if(totalPrice > 35){
        shipping = 0;
    }

    else if(totalPrice > 15){
        shipping = 4.99;
    }
    else if(totalPrice > 0){
        shipping = 12.99;
    }

    const text = Math.round( totalPrice / 10).toFixed(2);
    const greandTotal = (totalPrice + shipping + Number(text)).toFixed(2);
    const formateNumber = num =>{
        const precision = num.toFixed(2)
        return Number(precision)
    }
    return (
        <div>
            <h4>Order Summary</h4>
            <p>Items Ordered : {cart.length}</p>
            <p>Product Price : {formateNumber(totalPrice)}</p>
            <p>Shipping Cost : ${shipping}</p>
            <p><small>Text : {text}</small></p>
            <p>Total Price : ${greandTotal}</p>
        </div>
    );
};

export default Cart;