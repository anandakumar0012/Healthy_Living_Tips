import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import "./fullFoodPrecaution.css";
import Logo from "../../assets/Logo-Gray.png";
import { Link } from 'react-router-dom';
import FoodCard from './FoodCard';
import FoodCard1 from '../../assets/FoodCard1.jpg';
import FoodCard2 from '../../assets/FoodCard2.jpg';
import FoodCard3 from '../../assets/FoodCard3.jpg';
import FoodCard4 from '../../assets/FoodCard4.jpg';
import FoodCard5 from '../../assets/FoodCard5.jpg';

const FullFoodPrecaution = () => {

  const cardsData = [
    {
      imageSrc: FoodCard1,
      title: 'Summer',
      list1Title: 'Recommended Foods',
      list1: ['Watermelon','Cucumber', 'Yogurt', 'Mint', 'Lemonade'],
      list2Title: 'Medicinal Precautions',
      list2: ['Stay hydrated', 'Use sunscreen', 'Wear loose clothing', 'Avoid peak sun hours', 'Use rehydration salts'],
    },
    {
      imageSrc: FoodCard2,
      title: 'Winter',
      list1Title: 'Recommended Foods',
      list1: ['Ginger tea', 'Soup', 'Nuts', 'Honey', 'Citrus fruits'],
      list2Title: 'Medicinal Precautions',
      list2: ['Moisturise skin', 'Keep warm', 'Use humidifiers', 'Take Vitamin D supplements', 'Drink warm fluids'],
    },
    {
      imageSrc: FoodCard3,
      title: 'Monsoon',
      list1Title: 'Recommended Foods',
      list1: ['Garlic', 'Turmeric', 'Bitter gourd', 'Herbal tea', 'Steamed vegetables'],
      list2Title: 'Medicinal Precautions',
      list2: ['Keep surroundings dry', 'Use mosquito repellents', 'Avoid street food', 'Wear waterproof shoes', 'Boost immunity with supplements'],
    },
    {
      imageSrc: FoodCard4,
      title: 'Autumn',
      list1Title: 'Recommended Foods',
      list1: ['Pumpkin', 'Apples', 'Carrots', 'Beetroot', 'Broccoli'],
      list2Title: 'Medicinal Precautions',
      list2: ['Stay active', 'Wear layers', 'Drink herbal teas', 'Use allergy medications', 'Keep skin moisturised'],
    },
    {
      imageSrc: FoodCard5,
      title: 'Spring',
      list1Title: 'Recommended Foods',
      list1: ['Berries', 'Spinach', 'Asparagus', 'Peas', 'Artichokes'],
      list2Title: 'Medicinal Precautions',
      list2: ['Manage allergies', 'Stay hydrated', 'Exercise regularly', 'Use sunscreen', 'Eat seasonal foods'],
    },
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

      <header className="header d-flex justify-content-between align-items-center">
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/">
              <img className='text-white-logo' src={Logo} alt="Logo" />
            </Link>
          </div>
          <h2 className="title ml-2">Healthy Hub</h2>
        </div>

        <nav className="navbar navbar-expand-lg navbar-custom">
        <div className="container-fluid">
          <div className="collapse navbar-collapse justify-content-center">
            <div className="navbar-nav">
              <Link to='/' className='nav-link'>Home</Link>
              <Link to='/Blog' className='nav-link'>Blog</Link>
              <Link to='/FoodRecipe' className='nav-link'>Food</Link>
              <Link to='/Shop' className='nav-link'>Shop</Link>
            </div>
          </div>
        </div>
      </nav>

        <div className="text-right fullclimate-time-date">
          <h2>{formatTime(currentTime)}</h2>
          <p>{formatDate(currentTime)}</p>
        </div>
      </header>

      {/* Climate Section */}

      <div className="container my-4">
        <div className="row">
          {cardsData.slice(0, 3).map((card, index) => (
            <FoodCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              list1Title={card.list1Title}
              list1={card.list1}
              list2Title={card.list2Title}
              list2={card.list2}
            />
          ))}
        </div>
        <div className="row justify-content-center">
          {cardsData.slice(3, 5).map((card, index) => (
            <FoodCard
              key={index}
              imageSrc={card.imageSrc}
              title={card.title}
              list1Title={card.list1Title}
              list1={card.list1}
              list2Title={card.list2Title}
              list2={card.list2}
            />
          ))}
        </div>
      </div>
      <Footer />
    </>
  )
}

export default FullFoodPrecaution