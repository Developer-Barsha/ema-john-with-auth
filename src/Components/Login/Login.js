import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import './Login.css';
import toast, { Toaster } from 'react-hot-toast';
import auth from '../../firebase.init'
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';

const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || '/';

    const [signInWithEmailAndPassword, user, loading, error] = useSignInWithEmailAndPassword(auth);

    //getting email from input
    const [email, setEmail] = useState("");
    const getEmail = (e) => {
        setEmail(document.querySelector('#email').value);
    }

    //getting password from input
    const [password, setPassword] = useState("");
    const getPassword = (e) => {
        setPassword(e.target.value);
    }

    useEffect(() => {
        if (user) {
            toast.success('Logged in');
            navigate(from, { replace: true });
        }
    }, [user])

    //

    const login = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(email, password);
        if (error) {
            toast.error(error?.message);
        }
    };
    return (
        <div>

            <Toaster
                position="top-center"
                reverseOrder={false}
            />

            <div className="form-container">
                <div>
                    <h2 className='form-title'>Login</h2>
                    <form onSubmit={login}>
                        <div className="input-group">
                            <label htmlFor="email">Email</label>
                            <input onBlur={getEmail} type="email" name="email" id="email" placeholder='Your Email' required />
                        </div>
                        <div className="input-group">
                            <label htmlFor="password">Password</label>
                            <input onBlur={getPassword} type="password" name="password" id="password" placeholder='Your Password' required />
                        </div>
                        {loading && <p>...........Loading!</p>}
                        <p>{error && error?.message}</p>
                        <input type="submit" value="Login" className="form-submit" />
                    </form>

                    <p style={{ textAlign: 'center', margin: '5px' }}>
                        New To Ema-Jhon? <Link className='form-link' to={'/signup'}>Create New Account</Link>
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

export default Login;