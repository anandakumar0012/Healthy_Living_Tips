import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogCard = ({ imageSrc, title, content }) => {
    return (
        <div className={"col-md-4 mb-4"}>
            <div className="card h-100">
                <div className="card-img-wrapper">
                    <img src={imageSrc} className="card-img-top" alt={title} />
                    <div className="card-img-overlay"></div>
                </div>
                <div className="card-body">
                    <h5 className="blog-card-title">{title}</h5>
                    <p className="blog-card-text">{content}</p>
                </div>
            </div>
        </div>
    )
}

export default BlogCard