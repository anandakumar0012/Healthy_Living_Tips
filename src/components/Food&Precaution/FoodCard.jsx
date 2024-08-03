import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const FoodCard = ({ imageSrc, title, list1Title, list1, list2Title, list2 }) => {
  return (
    <div className="col-md-4 mb-4">
      <div className="card h-100">
        <div className="card-img-wrapper">
          <img src={imageSrc} className="card-img-top fullClimate-card-img" alt={title} />
          <div className="card-img-overlay"></div>
        </div>
        <div className="card-body fullClimate-card-body">
          <h5 className="card-title fullClimate-card-title">{title}</h5>
          <div className="foodPrecaution-list-section-1">
          <h6 className='fullClimate-card-subTitle'>{list1Title}</h6>
          <ul>
            {list1.map((item, index) => (
              <li className='fullClimate-card-list' key={index}>{item}</li>
            ))}
          </ul>
          </div>
          <div className="foodPrecaution-list-section-2">
          <h6 className="mt-3 fullClimate-card-subTitle">{list2Title}</h6>
          <ul>
            {list2.map((item, index) => (
              <li className='fullClimate-card-list' key={index}>{item}</li>
            ))}
          </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;