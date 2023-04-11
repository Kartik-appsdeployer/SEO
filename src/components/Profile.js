import React from 'react'
import './css/Profile.css';
import Logo from '../Profile.png'
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Profile = () => {
  return (

    <>
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
      <div class="profile">
        <Helmet>
          <title>Kartik information</title>
          <meta
            name="description"
            content="Here you'll get all the information related to Kartik Kulshreshtha profile"
          />
          <meta
            name="keywords"
            content="Kartik Kulshreshtha, Developer Kartik, Coder Kartik"
          />
        </Helmet>

        <div class="profile-header">
          <img src={Logo} alt="Profile" />
          <h1>Kartik</h1>
          <p>Full Stack Developer</p>
        </div>

        <div class="profile-info">
          <h2>About Me</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit sit amet arcu sodales scelerisque. Suspendisse potenti. Suspendisse id enim quam. Sed id nibh urna.</p>

          <h2>Skills</h2>
          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Python</li>
            <li>React</li>
            <li>MERN</li>
          </ul>

          <h2>Contact</h2>
          <p>Email: kartikkulshreshtha2507@gmail.com</p>
          <p>Phone: 7224098370</p>
        </div>
      </div>
    </>

  )
}

export default Profile
