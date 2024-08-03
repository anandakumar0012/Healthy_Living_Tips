import React, { useState } from 'react';
import Footer from '../Footer/Footer';
import "./fullShop.css";
import Logo from "../../assets/Logo-Gray.png";
import Product from "../../assets/Product.jpg";
import Product1 from "../../assets/Product1.jpg";
import Product2 from "../../assets/Product2.jpg";
import Product3 from "../../assets/Product3.jpg";
import Product4 from "../../assets/Product4.jpg";
import Product5 from "../../assets/Product5.jpg";
import Product6 from "../../assets/Product6.jpg";
import Product7 from "../../assets/Product7.jpg";
import Product8 from "../../assets/Product8.jpg";
import Product9 from "../../assets/Product9.jpg";
import Product10 from "../../assets/Product10.jpg";
import Product11 from "../../assets/Product11.jpg";
import Product12 from "../../assets/Product12.jpg";
import { Link } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import ShopCard from './ShopCard';

const FullShop = () => {

  const [cart, setCart] = useState({});

  const products = [
    { id: 1, name: 'Smart Watch', price: 2499, image: Product1 },
    { id: 2, name: 'Protein Bar', price: 432, image: Product2 },
    { id: 3, name: 'Shoes', price: 1349, image: Product3 },
    { id: 4, name: 'Protein Powder', price: 3199, image: Product4 },
    { id: 5, name: 'Dumbbell Set', price: 2298, image: Product5 },
    { id: 6, name: 'Water Bottle', price: 349, image: Product6 },
    { id: 7, name: 'Exercise Ball', price: 549, image: Product7 },
    { id: 8, name: 'Blender', price: 1999, image: Product8 },
    { id: 9, name: 'Yoga Mat', price: 999, image: Product9 },
    { id: 10, name: 'Herbal Tea', price: 599, image: Product10 },
    { id: 11, name: 'Jump Rope', price: 298, image: Product11 },
    { id: 12, name: 'Oats', price: 205, image: Product12 },
  ];

  const addToCart = (id) => {
    setCart(prevCart => ({
      ...prevCart,
      [id]: (prevCart[id] || 0) + 1
    }));
  };

  const removeFromCart = (id) => {
    setCart(prevCart => {
      const updatedCart = { ...prevCart };
      if (updatedCart[id] > 1) {
        updatedCart[id] -= 1;
      } else {
        delete updatedCart[id];
      }
      return updatedCart;
    });
  };

  const cartItemCount = Object.values(cart).reduce((acc, count) => acc + count, 0);

  return (
    <>

      {/* Header Section */}

      <header className="fullshop-header d-flex justify-content-between align-items-center sticky-top">
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/">
              <img className='text-white-logo' src={Logo} alt="Logo" />
            </Link>
          </div>
          <h2 className="fullshop-title ml-2">Healthy Hub</h2>
        </div>

        <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-center">
            <div className="navbar-nav">
              <Link to='/' className='nav-link'>Home</Link>
              <Link to='/Blog' className='nav-link'>Blog</Link>
              <Link to='/FoodRecipe' className='nav-link'>Food</Link>
              <Link to='/FoodPrecaution' className='nav-link'>ClimaticBites</Link>
            </div>
          </div>
        </div>
      </nav>

        <div className="d-flex align-items-center gap-4">
          <div className="cart-icon d-flex align-items-center">
            <FaShoppingCart />
            <span className="cart-count">{cartItemCount}</span>
          </div>
        </div>
      </header>

      {/* Full Width Section */}

      <section className="full-width-section d-flex">
        <div className="image-section">
          <img src={Product} alt="Full Width Section" />
        </div>
        <div className="content-section">
          <h2 className="content-title">Welcome to Our Store</h2>
          <p className="content-text">Discover the best products at unbeatable prices. Shop now and enjoy exclusive offers!</p>
          <p className="content-description">We offer a wide range of products, from electronics and fashion to healthy
            living essentials, all available at your fingertips.</p>
            <a href='#fullShopProduct'>
          <button className='btn btn-primary banner-button'>Buy Now</button>
          </a>
        </div>
      </section>


      {/* All Products Section */}

      <section className="all-products-section container full-shop-container my-4" id='fullShopProduct'>
      <h2 className="section-title">Products</h2>
      <div className="row">
        {products.map(product => (
          <ShopCard 
            key={product.id}
            product={product}
            addToCart={addToCart}
            removeFromCart={removeFromCart}
            cart={cart}
          />
        ))}
      </div>
    </section>

      <Footer />
    </>
  );
};

export default FullShop;