import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import "./blog.css"
import BlogImage from "../../assets/Blog.jpg";

const Blog = () => {

  const handleClick = (event) => {
    event.stopPropagation();
    window.open("/Blog", "_blank")
    console.log("Image Clicked");
  }

  return (
    <>

      <div id="blog" className="container-fluid blog-type">
        <div className="row d-flex align-items-stretch">
          <div className="col-sm-4 d-flex align-items-stretch equal-height">
            <div className="w-100 d-flex align-items-center justify-content-center blog-left-side">
                <img onClick={handleClick} className='blog-image' src={BlogImage}></img>
            </div>
          </div>
          <div className="col-sm-8 d-flex align-items-stretch equal-height">
            <div className="w-100 d-flex flex-column justify-content-center">
              <h2 className='blog-title'>Dive into Our Wellness Blog!</h2><br />
              <h4 className='blog-heading'>The Path to Vitality: A Guide to Healthy Living</h4>
              <p className='blog-para'>Discover the secrets to a healthier life with our blog, "The Path to Vitality."
                We offer practical tips on balanced nutrition, regular exercise, stress management, and avoiding
                harmful habits. Learn how small, consistent changes can significantly enhance your well-being and
                quality of life. Stay informed with expert advice and actionable insights to help you thrive physically,
                mentally, and emotionally. Join us on this journey towards a vibrant and healthier you. <span className='link' onClick={handleClick}>View Blog Page ➡</span></p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Blog