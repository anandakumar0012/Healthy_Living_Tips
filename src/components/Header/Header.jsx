import React, { useState, useEffect } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./header.css";
import Logo from "../../assets/Logo-Gray.png";
import { Link } from 'react-router-dom';

const Header = () => {

  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = (date) => {
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12;
    minutes = minutes < 10 ? '0' + minutes : minutes;
    return `${hours}:${minutes} ${ampm}`;
  };

  const formatDate = (date) => {
    const options = { day: '2-digit', month: 'short', year: 'numeric' };
    return date.toLocaleDateString(undefined, options);
  };

  return (
    <header className="header d-flex justify-content-between align-items-center sticky-top">
      <div className="d-flex align-items-center">
        <div className="d-flex justify-content-center align-items-center">
          <Link to="/">
            <img className='text-white-logo' src={Logo} alt="Logo" />
          </Link>
        </div>
        <h2 className="title ml-2" style={{color: "black"}}>Healthy Hub</h2>
      </div>

      <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-center">
            <div className="navbar-nav">
              <a className="nav-link" href="#">Home</a>
              <a className="nav-link" href="#blog">Blog</a>
              <a className="nav-link" href="#foodRecipe">Food</a>
              <a className="nav-link" href="#shop">Shop</a>
              <a className="nav-link" href="#climate">ClimaticBites</a>
            </div>
          </div>
        </div>
      </nav>

      <div className="text-right header-time-date">
        <h2 style={{color: "black"}}>{formatTime(currentTime)}</h2>
        <p style={{color: "black"}}>{formatDate(currentTime)}</p>
      </div>
    </header>
  )
}

export default Header