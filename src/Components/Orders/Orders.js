import React from 'react';
import './Orders.css'
import useProducts from '../../hooks/usePoducts'
import useCart from '../../hooks/useCart';
import Cart from '../Cart/Cart';
import ReviewItemItem from '../ReviewItem/ReviewItem';
import { removeFromDb } from '../../utilities/fakedb';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faVcard } from '@fortawesome/free-solid-svg-icons';

const Orders = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemoveProduct = product => {
        console.log(product);
        const rest = cart.filter(pd => pd.id !== product.id);
        setCart(rest);
        removeFromDb(product.id);
    }

    let navigate = useNavigate();

    return (
        <div className='shop-container'>
            <div className="products-container" style={{ display: 'flex', flexDirection: 'column', margin: '10px auto' }}>
                {
                    cart.map(product => <ReviewItemItem key={product.id} product={product} handleRemoveProduct={handleRemoveProduct} />)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <button className='review-order' onClick={() => navigate('/shipment')}>
                        Proceed Shipping <FontAwesomeIcon icon={faVcard}></FontAwesomeIcon>
                    </button>
                </Cart>
            </div>
        </div>
    );
};

export default Orders;