import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import "./Shop.css"
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'

const Shop = () => {
    const [products,setProducts] = useState([]);
    const [cart,setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const handleAddToCart = (product)=>{
        // const newCart = [...cart, product]
        let newCart = [];
        const exists = cart.find(pd => pd.id === product.id);
        if (!exists) {
            product.quantity = 1;
            newCart = [...cart, product];
        }
        else{
            exists.quantity = exists.quantity + 1;
            const remaining  = cart.filter(pd => pd.id !== product.id);
            newCart =[...remaining, product]
        }
        setCart(newCart)
        addToDb(product.id)
    }
   useEffect(() =>{
    const storedCart = getShoppingCart();
    const saveCart = [];
    for(const id in storedCart){
        const addedProduct = products.find(product => product.id === id);
        if (addedProduct) {
            const quantity = storedCart[id];
            addedProduct.quantity = quantity;
            saveCart.push(addedProduct);

        }
       
        setCart(saveCart);
    }
   },[products])
   const handleClearCart = ()=>{
    setCart([]);
    deleteShoppingCart();
   }
    return (
        <div className='shop-container'>
            <div className='product-container'>
                {
                    products.map(product => <Product product={product}
                    key={product.id}
                    handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div>
                <Cart
                cart={cart}
                handleClearCart={handleClearCart}
                

                >
                    <Link className='proceed-link' to='/orders'> 
                    <button className='proceed-btn'>Review Order <FontAwesomeIcon icon={faArrowRight} /></button>
                    </Link>
                </Cart>
                
            </div>
        </div>
    );
};

export default Shop;