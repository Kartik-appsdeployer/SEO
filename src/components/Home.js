import React from 'react'
import './css/Home.css';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Kartik info</title>
        <meta
          name="description"
          content="Here you'll get all the information related to Kartik Kulshreshtha"
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

      <section class="hero">
        <h1>Welcome to Our Website</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit sit amet arcu sodales scelerisque.</p>
        <button>Learn More</button>
      </section>

      <section class="services">
        <h2>Our Services</h2>
        <ul>
          <li>
            <h3>Service 1</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit sit amet arcu sodales scelerisque.</p>
          </li>
          <li>
            <h3>Service 2</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit sit amet arcu sodales scelerisque.</p>
          </li>
          <li>
            <h3>Service 3</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam non velit sit amet arcu sodales scelerisque.</p>
          </li>
        </ul>
      </section>

      <footer>
        <p>&copy; 2023 Our Website. All Rights Reserved.</p>
      </footer>
    </div>
  )
}

export default Home
