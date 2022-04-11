import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Toaster } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import auth from '../../firebase.init';
import './Shipment.css'

const Shipment = () => {
    const [user] = useAuthState(auth);
    //getting name from input
    const [name, setName] = useState("");
    const getName = (e) => {
        setName(e.target.value);
    }

    //getting password from input
    const [password, setPassword] = useState("");
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    //getting confirm-password from input
    const [address, setAddress] = useState("");
    const getAddress = (e) => {
        setAddress(e.target.value);
    }

    //getting Phone from input
    const [phone, setPhone] = useState("");
    const getPhone = (e) => {
        setPhone(e.target.value);
    }


    const handleFormSubmit = (event) => {
        event.preventDefault();
        const shipping = [name, address, phone];
    }

    return (
        <div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <div className="form-container">
                <div>
                    <h2 className='form-title'>Shipping Information</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <label htmlFor="name">Your Name</label>
                            <input type="text" name="name" id="3" placeholder='Your Name' onBlur={getName} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="email">Your Email</label>
                            <input type="email" name="email" id="3" value={user?.email} readOnly required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="address">Your Address</label>
                            <input type="text" name="address" id="5" placeholder='Your Address' onBlur={getAddress} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="phone">Phone number</label>
                            <input type="text" name="phone" id="4" placeholder='Your Phone' onBlur={getPhone} required />
                        </div>
                        <input type="submit" value="Add Shipping" className="form-submit" style={{marginBottom:'20px'}} />
                    </form>

                    {/* <div style={{ display: 'flex', margin: '10px', alignItems: "center" }}>
                        <hr style={{ height: '1px', backgroundColor: 'grey', border: '0', width: '150px' }} />
                        <p>or</p>
                        <hr style={{ height: '1px', backgroundColor: 'grey', border: '0', width: '150px' }} />
                    </div>

                    <button className='google'> <img src='google.jpg' alt='' /> Continue With Google</button> */}

                </div>
            </div>
        </div>
    );
};

export default Shipment;