import React, { useState, useEffect } from 'react'
import Footer from '../Footer/Footer'
import "./fullFoodRecipe.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from "../../assets/Logo-Gray.png";
import { Link } from 'react-router-dom';
import RecipeImage1 from "../../assets/Cooking.gif"

const data = [
  {
    main: 'Breakfast',
    sub: [
      { title: 'Oatmeal with Fruits', items: ['1 cup oats', '1 cup milk', '1 banana', '1/2 cup berries'], description: 'Cook oats with milk. Top with sliced banana and berries.', image: RecipeImage1 },
      { title: 'Greek Yogurt with Honey', items: ['1 cup Greek yogurt', '1 tbsp honey', '1/4 cup nuts'], description: 'Cook oats with milk. Top with sliced banana and berries.', image: RecipeImage1 },
      { title: 'Avocado Toast', items: ['1 avocado', '2 slices whole grain bread', 'Salt', 'Pepper'], description: 'Mash avocado. Spread on toast. Season with salt and pepper.', image: RecipeImage1 },
      { title: 'Smoothie Bowl', items: ['1 banana', '1/2 cup berries', '1/2 cup spinach', '1/2 cup almond milk'], description: 'Blend ingredients. Pour into a bowl. Top with fruits and nuts.', image: RecipeImage1 },
      { title: 'Scrambled Eggs', items: ['2 eggs', '1 tbsp milk', 'Salt', 'Pepper'], description: 'Whisk eggs with milk. Cook in a pan. Season with salt and pepper.', image: RecipeImage1 },
      { title: 'Chia Pudding', items: ['1/4 cup chia seeds', '1 cup almond milk', '1 tbsp honey'], description: 'Mix chia seeds with almond milk and honey. Refrigerate overnight.', image: RecipeImage1 },
    ],
  },
  {
    main: 'Lunch',
    sub: [
      { title: 'Grilled Chicken Salad', items: ['1 chicken breast', 'Mixed greens', 'Cherry tomatoes', 'Olive oil'], description: 'Grill chicken. Toss with greens and tomatoes. Drizzle with olive oil.', image: RecipeImage1 },
      { title: 'Quinoa Bowl', items: ['1 cup quinoa', '1 avocado', '1/2 cup beans', 'Lime juice'], description: 'Cook quinoa. Top with avocado and beans. Drizzle with lime juice.', image: RecipeImage1 },
      { title: 'Veggie Wrap', items: ['Whole grain wrap', 'Hummus', 'Cucumber', 'Bell pepper'], description: 'Spread hummus on wrap. Add sliced veggies. Roll up.', image: RecipeImage1 },
      { title: 'Lentil Soup', items: ['1 cup lentils', '1 carrot', '1 celery stalk', 'Vegetable broth'], description: 'Cook lentils with chopped veggies and broth until tender.', image: RecipeImage1 },
      { title: 'Turkey Sandwich', items: ['Whole grain bread', 'Turkey slices', 'Lettuce', 'Tomato'], description: 'Assemble sandwich with turkey, lettuce, and tomato.', image: RecipeImage1 },
      { title: 'Sushi Bowl', items: ['1 cup rice', '1/2 cup cucumber', '1/2 cup avocado', 'Soy sauce'], description: 'Cook rice. Top with cucumber and avocado. Drizzle with soy sauce.', image: RecipeImage1 },
    ],
  },
  {
    main: 'Dinner',
    sub: [
      { title: 'Baked Salmon', items: ['1 salmon fillet', 'Lemon', 'Garlic', 'Olive oil'], description: 'Bake salmon with lemon, garlic, and olive oil at 375°F for 20 minutes.', image: RecipeImage1 },
      { title: 'Stir-Fried Tofu', items: ['1 block tofu', 'Broccoli', 'Soy sauce', 'Garlic'], description: 'Stir-fry tofu and broccoli with soy sauce and garlic.', image: RecipeImage1 },
      { title: 'Chicken Curry', items: ['1 chicken breast', 'Curry powder', 'Coconut milk', 'Vegetables'], description: 'Cook chicken with curry powder, coconut milk, and veggies.', image: RecipeImage1 },
      { title: 'Veggie Pasta', items: ['Whole grain pasta', 'Tomato sauce', 'Mixed veggies', 'Parmesan'], description: 'Cook pasta. Toss with sauce and veggies. Top with Parmesan.', image: RecipeImage1 },
      { title: 'Stuffed Bell Peppers', items: ['Bell peppers', 'Quinoa', 'Black beans', 'Cheese'], description: 'Stuff peppers with cooked quinoa and beans. Top with cheese and bake.', image: RecipeImage1 },
      { title: 'Shrimp Tacos', items: ['Shrimp', 'Tortillas', 'Cabbage', 'Lime'], description: 'Cook shrimp. Serve in tortillas with cabbage and lime.', image: RecipeImage1 },
    ],
  },
];

const FullFoodRecipe = () => {

  const [selectedSubheading, setSelectedSubheading] = useState(null);

  const handleSubheadingClick = (subheading) => {
    setSelectedSubheading(subheading);
  };

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

      <header className="recipe-header d-flex justify-content-between align-items-center sticky-top">
        <div className="d-flex align-items-center">
          <div className="d-flex justify-content-center align-items-center">
            <Link to="/">
              <img className='text-white-logo' src={Logo} alt="Logo" />
            </Link>
          </div>
          <h2 className="recipe-title ml-2">Healthy Hub</h2>
        </div>

        <nav className="navbar navbar-expand-lg navbar-custom">
          <div className="container-fluid">
            <div className="collapse navbar-collapse justify-content-center">
              <div className="navbar-nav">
                <Link to='/' className='nav-link'>Home</Link>
                <Link to='/Blog' className='nav-link'>Blog</Link>
                <Link to='/Shop' className='nav-link'>Shop</Link>
                <Link to='/FoodPrecaution' className='nav-link'>ClimaticBites</Link>
              </div>
            </div>
          </div>
        </nav>

        <div className="text-right recipe-time-date">
          <h2>{formatTime(currentTime)}</h2>
          <p>{formatDate(currentTime)}</p>
        </div>
      </header>

      {/* List Section */}

      <div className="container main-container mt-4">
        <div className="row">
          <div className="col-md-4">
            <div className="list-group list-section">
              {data.map((mainItem, index) => (
                <div key={index}>
                  <h5 className="list-group-item list-group-item-secondary">{mainItem.main}</h5>
                  {mainItem.sub.map((subItem, subIndex) => (
                    <button
                      key={subIndex}
                      type="button"
                      className="list-group-item list-group-item-action"
                      onClick={() => handleSubheadingClick(subItem)}
                    >
                      {subItem.title}
                    </button>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div className="col-md-8 main-card-right">
            {selectedSubheading && (
              <div className="card main-card">
                <div className="card-body body-card">
                  <img className='test-image' src={selectedSubheading.image} alt={selectedSubheading.title} />

                  <h5 className="recipe-card-title">{selectedSubheading.title}</h5>
                  <h6 className="card-subtitle mb-2 text-muted">Ingredients</h6>
                  <ul className="list-group list-group-flush">
                    {selectedSubheading.items.map((item, index) => (
                      <li key={index} className="list-group-item recipe-list-group-item">{item}</li>
                    ))}
                  </ul>
                  <h6 className="card-subtitle mt-3 mb-2 text-muted">Instructions</h6>
                  <p className="card-text recipe-card-text">{selectedSubheading.description}</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}

export default FullFoodRecipe