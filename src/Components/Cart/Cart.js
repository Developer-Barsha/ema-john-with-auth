import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { deleteShoppingCart } from '../../utilities/fakedb';
import './Cart.css'

const Cart = (props) => {
    const {cart} = props;

    let total =0;
    let shipping =0;
    let quantity =0;
    
    for(const product of cart){
            quantity =quantity + product.quantity;
            total = total + product.price * product.quantity;
            shipping = shipping + product.shipping;
    }

    const tax = parseFloat((total*0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    
    return (
        <div className='cart'>
            <h2>Cart summary</h2>
            <p>Selected Items:<b> {quantity}</b></p>
            <p>Total Price:<b> ${total}</b></p>
            <p>Shipping Charge:<b> ${shipping}</b></p>
            <p>Tax:<b> ${tax}</b></p>
            <h4>Grand-total: ${grandTotal.toFixed(2)}</h4>
            <br></br>
                    <button className='clear-cart' onClick={deleteShoppingCart}>Clear Cart <FontAwesomeIcon icon={faTrashAlt}></FontAwesomeIcon></button>
            {props.children}
        </div>
    );
};

export default Cart;