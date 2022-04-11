import React, { useEffect, useState } from 'react';
import { addToDb, deleteShoppingCart, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css';
import useProducts from '../../hooks/usePoducts'
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight, faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const Shop = () => {
    //state
    const [products, setProducts] =  useProducts();
    const [cart, setCart]= useState([]);

    useEffect(()=>{
        const storedCart = getStoredCart();
        const savedCart = [];
        for(const id in storedCart){
            const addedProduct=products.find(product=>product.id===id);
            if(addedProduct){
                const quantity = storedCart[id];
                addedProduct.quantity =quantity 
                savedCart.push(addedProduct);
            }
        }
        setCart(savedCart);
    },[products]);

    //handler
    const handleAddToCart =(selectedProduct)=>{
        const exists =cart.find(product=>product.id===selectedProduct.id);
        let newCart = [];
        if(!exists){
            selectedProduct.quantity = 1;
            newCart=[...cart, selectedProduct];
        }else{
            const rest =cart.filter(product=>product.id !== selectedProduct.id);
            exists.quantity = exists.quantity+1;
            newCart=[...rest, exists];
        }
        setCart(newCart);
        addToDb(selectedProduct.id)
    };

    //returning
    return (
        <div className='shop-container'>
            <div className="products-container">
                {
                    products.map(product=><Product key={product.id} handleAddToCart={handleAddToCart} product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders' style={{textDecoration:'none'}}>
                        <button className='review-order' >
                            Review Order <FontAwesomeIcon icon={faArrowCircleRight}></FontAwesomeIcon> 
                        </button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;