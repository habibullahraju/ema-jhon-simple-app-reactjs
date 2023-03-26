import React from 'react';
import './Product.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = (props) => {
    const {img,name,price, seller ,ratings} = props.product

  const handleAddToCart = props.handleAddToCart;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
            <h4 className='product-name'>{name}</h4>
            <p>Price: ${price}</p>
            <p>Manufacturer: {seller}</p>
            <p>Rating: {ratings} Stars</p>
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='addToCartBtn'>Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>

            
            
        </div>
    );
};
import './Product.css'
export default Product;