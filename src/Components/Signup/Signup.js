import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Signup.css';
// import toast, { Toaster } from 'react-hot-toast';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Signup = () => {
    // create user
    const [createUserWithEmailAndPassword, user, error] = useCreateUserWithEmailAndPassword(auth);
    const navigate = useNavigate();
    useEffect(() => {
        if (user) {
            navigate('/shop');
            return;
        }
    }, [user])


    //getting email from input
    const [email, setEmail] = useState("");
    const getEmail = (e) => {
        setEmail(e.target.value);
    }
    
    //getting password from input
    const [password, setPassword] = useState("");
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    //getting confirm-password from input
    const [confirmPassword, setConfirmPassword] = useState("");
    const getConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    // if (error) {
    //     console.error(error?.message);
    //     return;
    // }

    const handleFormSubmit = (event) => {
        event.preventDefault();
        if (password !== confirmPassword) {
            console.error("Confirm password didn't match");
            return;
        }
        if(password.length <6){
            console.error("Password too short");
            return;
            
        }
        createUserWithEmailAndPassword(email, password);
    }

    return (
        <div>

            <div className="form-container">
                <div>
                    <h2 className='form-title'>Sign Up</h2>
                    <form onSubmit={handleFormSubmit}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email" id="3" placeholder='Your Email' onChange={getEmail} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password" id="4" placeholder='Your Password' onChange={getPassword} required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="confirm-password">Confirm Password</label>
                            <input type="password" name="confirm-password" id="5" placeholder='Confirm Password' onChange={getConfirmPassword} required />
                        </div>
                        <p>{error && error.message}</p>
                        <input type="submit" value="Sign Up" className="form-submit" />
                    </form>

                    <p style={{ textAlign: 'center', margin: '5px' }}>
                        Already Have an account? <Link className='form-link' to={'/login'}>Login</Link>
                    </p>

                    <div style={{ display: 'flex', margin: '10px', alignItems: "center" }}>
                        <hr style={{ height: '1px', backgroundColor: 'grey', border: '0', width: '150px' }} />
                        <p>or</p>
                        <hr style={{ height: '1px', backgroundColor: 'grey', border: '0', width: '150px' }} />
                    </div>

                    <button className='google'> <img src='google.jpg' alt='' /> Continue With Google</button>

                </div>
            </div>
        </div>
    );
};

export default Signup;