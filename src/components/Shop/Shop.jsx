import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./shop.css"
import ShopImage from "../../assets/Shop.jpg";

const Shop = () => {

  const handleClick = (event) => {
    event.stopPropagation();
    window.open("/Shop", "_blank")
    console.log("Image Clicked");
  }

  return (
    <>
      <div id="shop" className="container-fluid shop-type">
        <div className="row d-flex align-items-stretch">
          <div className="col-sm-4 d-flex align-items-stretch equal-height">
            <div className="w-100 d-flex align-items-center justify-content-center shop-left-side">
                <img onClick={handleClick} className='shop-image' src={ShopImage}></img>
            </div>
          </div>
          <div className="col-sm-8 d-flex align-items-stretch equal-height">
            <div className="w-100 d-flex flex-column justify-content-center">
              <h2 className='shop-title'>Healthy Living Picks</h2><br />
              <h4 className='shop-heading'>Wellness Essentials: Your One-Stop Shop for Healthy Living Products</h4>
              <p className='shop-para'>Welcome to "Wellness Essentials," your ultimate destination for all things health and
                wellness. Our e-commerce shop offers a curated selection of high-quality products, from organic
                foods and supplements to fitness gear and natural skincare. We prioritize sustainable, ethically sourced
                items that support your journey to a healthier lifestyle. Whether you're looking to enhance your diet,
                improve your fitness routine, or find eco-friendly household products, Wellness Essentials has you covered.
                Shop with us for a healthier, happier life! <span className='link' onClick={handleClick}>View Store Page ➡</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Shop