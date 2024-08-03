import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./foodPrecaution.css"
import ClimateImage from "../../assets/Climate.jpg";

const FoodPrecaution = () => {

  const handleClick = (event) => {
    event.stopPropagation();
    window.open("/FoodPrecaution", "_blank")
    console.log('Image clicked'); 
  }

  return (
    <>
      <div className="container-fluid foodPrecaution-type" id='climate'>
        <div className="row d-flex align-items-stretch">
          <div className="col-sm-8 d-flex align-items-stretch equal-height">
            <div className='w-100 d-flex flex-column justify-content-center foodPrecaution-left-side'>
              <h2 className='foodPrecaution-title'>Food and Medicine for Every Season</h2><br />
              <h4 className='foodPrecaution-heading'>ClimateWise Food & Medicine: Sustainable Practices for a Healthier Future</h4>
              <p className='foodPrecaution-para'>Discover ClimateWise Food & Medicine, where sustainable living meets
                health-conscious choices. Our platform provides insights and products focused on reducing environmental
                impact while promoting wellness. Learn about eco-friendly food options, natural remedies, and climate-smart
                practices that support both personal health and the planet. From organic farming to green medicine,
                we offer practical tips and solutions for integrating sustainability into your daily routine.
                Embrace a greener lifestyle with ClimateWise for a healthier future for you and the environment. <span className='link' onClick={handleClick}>View Precaution Page ➡</span></p>
            </div>
          </div>
          <div className="col-sm-4 d-flex align-items-stretch equal-height">
            <div className='w-100 d-flex align-items-center justify-content-center'>
                <img onClick={handleClick} className='foodPrecaution-image' src={ClimateImage}></img>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FoodPrecaution