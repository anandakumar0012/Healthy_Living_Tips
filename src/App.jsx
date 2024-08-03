import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header.jsx'
import DailyTips from './components/DailyTips/DailyTips.jsx'
import Blog from './components/Blog/Blog'
import FullBlog from './components/Blog/FullBlog.jsx'
import FoodRecipe from './components/FoodRecipe/FoodRecipe'
import FullFoodRecipe from './components/FoodRecipe/FullFoodRecipe.jsx';
import Shop from './components/Shop/Shop'
import FullShop from "./components/Shop/FullShop.jsx";
import FoodPrecaution from './components/Food&Precaution/FoodPrecaution'
import FullFoodPrecation from "./components/Food&Precaution/FullFoodPrecaution.jsx"
import Care from './components/Care/Care.jsx'
import Footer from './components/Footer/Footer'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Header />
            <DailyTips />
            <Blog />
            <FoodRecipe />
            <Shop />
            <FoodPrecaution />
            <Care />
            <Footer />
          </>
        } />
        <Route path="/Blog" element={<FullBlog />} />
        <Route path="/FoodRecipe" element={<FullFoodRecipe />} />
        <Route path="/Shop" element={<FullShop />} />
        <Route path="/FoodPrecaution" element={<FullFoodPrecation />} />
        <Route path="/Header" element={<Header />} />
      </Routes>
    </Router>
  )
}

export default App