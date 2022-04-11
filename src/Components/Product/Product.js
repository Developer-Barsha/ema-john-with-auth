import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
  import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css'

const Product = (props) => {
    const {img,name,ratings,category,price} = props.product;
    const {handleAddToCart} = props;
    return (
        <div className='product'>
            <img src={img} alt="" />

            <div className='product-info'>
                <h2 className='product-name'>{name}</h2>
                <h2 className='product-price'><b>Price:</b> ${price}</h2>
                <p><small>{category}</small></p>
                <p><small><b>Rating: </b>{ratings} stars</small></p>
                {/* <button className="my-button">Add To Cart</button> */}
            </div>
            <button onClick={()=>handleAddToCart(props.product)} className='btn-cart'>
               <p>Add To Cart <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon> </p>
            </button>
        </div>
    );
};

export default Product;