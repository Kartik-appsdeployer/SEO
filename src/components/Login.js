import React from 'react'
import './css/Login.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <>
            <Helmet>
                <title>Kartik info</title>
                <meta
                    name="description"
                    content="You'll need to login first if you want to get information about Kartik Kulshreshtha"
                />
                <meta
                    name="keywords"
                    content="Kartik Kulshreshtha, Developer Kartik, Coder Kartik"
                />
            </Helmet>
            <header>
                <nav>
                    <ul>
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/profile">Profile</Link></li>
                        <li><Link to="/login">Login</Link></li>
                        <li><Link to="/signup">SignUp</Link></li>
                    </ul>
                </nav>
            </header>
            <div className='LOGIN'>
                <form class="login-form" action="login.php" method="post">
                    <h2>Login</h2>
                    <div class="form-group">
                        <label for="username">Username:</label>
                        <input type="text" id="username" name="username" required />
                    </div>

                    <div class="form-group">
                        <label for="password">Password:</label>
                        <input type="password" id="password" name="password" required />
                    </div>

                    <button type="submit">Login</button>
                </form>
            </div>
        </>

    )
}

export default Login
