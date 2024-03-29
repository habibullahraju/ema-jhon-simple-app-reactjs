import React from 'react';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = ({cart,handleClearCart,children}) => {
   

  
    let total = 0;
    let shippingCharge = 0;
    let quantity = 0;
    for (const product of cart) {
        // if (product.quantity === 0) {
        //     product.quantity = 1;
        // }
        total = total + product.price * product.quantity;
        shippingCharge = shippingCharge + product.shipping;
        quantity = quantity + product.quantity;
    }
    const tax = total * 7/100;
    const grandTotal = total + shippingCharge + tax;
    return (
        <div  className='order-container'>
            <h4 className='order-summary'>Order Summary</h4>
                <p>Selected item: {quantity}</p>
                <p>Total Price: ${total} </p>
                <p>Shipping Charge: ${shippingCharge} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>

                <button onClick={handleClearCart} className='clear-cart-btn' ><span>Clear Cart </span><FontAwesomeIcon icon={faTrash} />
                
                </button>
                {children}
        </div>
    );
};

export default Cart;