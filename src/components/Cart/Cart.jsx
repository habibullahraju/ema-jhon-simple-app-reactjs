import React from 'react';
import './Cart.css';

const Cart = ({cart}) => {
   
 
   console.log(cart);
    let total = 0;
    let shippingCharge = 0;
    for (const product of cart) {
        total = total + product.price;
        shippingCharge = shippingCharge + product.shipping;
    }
    const tax = total * 7/100;
    const grandTotal = total + shippingCharge + tax;
    return (
        <div  className='order-container'>
            <h4 className='order-summary'>Order Summary</h4>
                <p>Selected item: {cart.length}</p>
                <p>Total Price: ${total} </p>
                <p>Shipping Charge: ${shippingCharge} </p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h4>Grand Total: ${grandTotal.toFixed(2)}</h4>
        </div>
    );
};

export default Cart;