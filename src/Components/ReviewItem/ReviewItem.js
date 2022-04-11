import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';

const ReviewItem = ({product,handleRemoveProduct}) => {
    const {img,name,quantity,price, shipping} = product;

    return (
        <div className='cart-item'>
                <div className='basic'>
                    <img src={img} alt="" />

                    <div className="info">
                        <h5 title={name}>{name.length>20 ? name.slice(0,20)+'...': name}</h5>
                        <p>Price: $ <b style={{color:'goldenrod'}}>{price}</b></p>
                        <p>Quantity: <b style={{color:'goldenrod'}}>{quantity}</b></p>
                        <p>Shipping: <b style={{color:'goldenrod'}}>{shipping}</b> Tk</p>
                    </div>

                </div>
                <button className='delete-button' onClick={()=>handleRemoveProduct(product)}>
                    <FontAwesomeIcon className='delete-icon' icon={faTrashAlt} />
                </button>
        </div>
    );
};

export default ReviewItem;