import React from 'react';
import './Product.css'

const Product = (props) => {
    // console.log(props)
    const {img,name,seller,price,stock} = props.product

    return (
        <div className='product'>
            <div>
               <img src={img}alt="" />
            </div>
            <div>
                <h4 className='product-name'>{name}</h4>
                <br />
                <p><small>by : {seller}</small></p>
                <p><b>Price : ${price}</b></p>
                <p><i><small>Only {stock} left in stock - Order soon</small></i></p>

                <button className='main-button' onClick = {() => props.handhelAddProduct(props.product)}> Add to cart</button>
            </div>

            
        </div>
    );
};

export default Product;