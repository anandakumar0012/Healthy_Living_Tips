import React, { useState, useEffect } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from '../Footer/Footer';
import "./fullBlog.css"
import Logo from "../../assets/Logo-Gray.png";
import { Link } from 'react-router-dom';
import BlogCard from './BlogCard.jsx';
import Card1 from '../../assets/Card1.jpg';
import Card2 from '../../assets/Card2.jpg';
import Card3 from '../../assets/Card3.jpg';
import Card4 from '../../assets/Card4.jpg';
import Card5 from '../../assets/Card5.jpg';
import Card6 from '../../assets/Card6.jpg';

const FullBlog = () => {

  const cardsData = [
    { imageSrc: Card1, title: 'Tips for a Healthy Lifestyle', content: 'Living a healthy lifestyle does not have to be hard. From eating a balanced diet and staying hydrated to getting enough sleep and managing stress.' },
    { imageSrc: Card2, title: 'The Importance of Regular Exercise', content: 'Regular exercise is crucial for maintaining good health. Learn about the benefits of staying active, including improved mental health, increased energy levels.' },
    { imageSrc: Card3, title: 'Eating Well on a Budget', content: 'Eating healthy does not have to be expensive. Discover ways to eat well without breaking the bank, including shopping for seasonal produce, buying in bulk, and preparing meals at home.' },
    { imageSrc: Card4, title: 'Mental Health: Breaking the Stigma', content: 'Mental health is just as important as physical health. This article discusses the importance of mental well-being and provides tips on how to take care of your mental health.' },
    { imageSrc: Card5, title: 'The Benefits of a Plant-Based Diet', content: 'A plant-based diet can offer numerous health benefits, including improved heart health, better digestion, and a lower risk of certain diseases.' },
    { imageSrc: Card6, title: 'The Role of Sleep in Overall Health', content: 'Quality sleep is essential for overall health and well-being. This article explores the role of sleep in maintaining good health, including its impact on the immune system.' },
  ];

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
    <>
      {/* Header Section */}

      <header className="header d-flex justify-content-between align-items-center sticky-top">
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/">
              <img className='text-white-logo' src={Logo} alt="Logo" />
            </Link>
          </div>
          <h2 className="blog-title-full ml-2">Healthy Hub</h2>
        </div>

        <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-center">
            <div className="navbar-nav">
              <Link to='/' className='nav-link'>Home</Link>
              <Link to='/FoodRecipe' className='nav-link'>Food</Link>
              <Link to='/Shop' className='nav-link'>Shop</Link>
              <Link to='/FoodPrecaution' className='nav-link'>ClimaticBites</Link>
            </div>
          </div>
        </div>
      </nav>

        <div className="text-right blog-time-date">
          <h2>{formatTime(currentTime)}</h2>
          <p>{formatDate(currentTime)}</p>
        </div>
      </header>

      {/* Card Section */}

      <div className="container my-4">
        <div className="row">
          {cardsData.map((card, index) => (
            <BlogCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              content={card.content}
            />
          ))}
        </div>
      </div>

      

      <Footer />
    </>
  )
}

export default FullBlog