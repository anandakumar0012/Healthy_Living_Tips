import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./foodRecipe.css"
import Food from "../../assets/Food_Recipe.jpg";

const FoodRecipe = () => {

  const handleClick = (event) => {
    event.stopPropagation();
    window.open("/FoodRecipe", "_blank")
    console.log("Image Clicked");
  }

  return (
    <>
      <div className="container-fluid recipe-type" id='foodRecipe'>
        <div className="row d-flex align-items-stretch">
          <div className="col-sm-8 d-flex align-items-stretch equal-height">
            <div className='w-100 d-flex flex-column justify-content-center foodRecipe-left-side'>
              <h2 className='food-title'>Boost Your Health with Every Meal</h2><br />
              <h4 className='food-heading'>Nourishing Delights: Healthy Food Recipes for a Vibrant Life</h4>
              <p className='food-para'>Explore "Nourishing Delights," where we share wholesome recipes to fuel your body
                and mind. Our easy-to-follow recipes emphasize fresh, nutrient-rich ingredients, perfect for balanced meals.
                Discover delicious dishes that support your health goals, whether you're looking to boost energy,
                maintain a healthy weight, or simply enjoy nourishing food. From vibrant salads to hearty mains and
                guilt-free desserts, our recipes are designed to make healthy eating enjoyable and accessible for everyone.
                Join us and savor the taste of wellness! <span className='link' onClick={handleClick}>View Food Recipe Page ➡</span></p>
            </div>
          </div>
          <div className="col-sm-4 d-flex align-items-stretch equal-height">
            <div className='w-100 d-flex align-items-center justify-content-center'>
                <img onClick={handleClick} className='food-image' src={Food}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodRecipe