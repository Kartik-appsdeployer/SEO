
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Profile from './components/Profile';
import { Helmet } from 'react-helmet';


function App() {
  return (
    <div>
      <Router>
      <Helmet>
        <title>Kartik info</title>
        <meta
          name="description"
          content="Get all the information related to kartik kulshreshtha"
        />
        <meta
          name="keywords"
          content="Kartik Kulshreshtha, Developer Kartik, Coder Kartik"
        />
      </Helmet>
        <Routes>
          <Route path="/login" element={<Login/>}/>
          <Route path="/signup" element={<SignUp/>}/>
          <Route path="/" element={<Home/>}/>
          <Route path="/profile" element={<Profile/>}/>
        </Routes>

      </Router>
    </div>
  );
}

export default App;
