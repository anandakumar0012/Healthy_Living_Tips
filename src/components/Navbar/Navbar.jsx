import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./navbar.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-custom sticky-top">
    <div className="container-fluid">
      <div className="collapse navbar-collapse justify-content-center">
        <div className="navbar-nav">
          <a className="nav-link" href="#">Home</a>
          <a className="nav-link" href="#dailyTips">DailyTips</a>
          <a className="nav-link" href="#blog">Blog</a>
          <a className="nav-link" href="#foodRecipe">Food</a>
          <a className="nav-link" href="#shop">Shop</a>
          <a className="nav-link" href="#climate">Precaution</a>
          <a className="nav-link" href="#care">Care</a>
        </div>
      </div>
    </div>
  </nav>
  )
}

export default Navbar