'use client'
import React from "react";
import styles from '../src/app/styles/app.scss'
import GradeIcon from '@mui/icons-material/Grade';

const CardView = ({
  name,
  rating,
  description,
  price,
  location,
  distance,
  food_image,
  discount,
}) => {

  return (
    <div className="d-inline">

      <div className="card-view">
        <img className="card-image" src={food_image} alt="restaurant-image" />

        <p className="discount-p">
          <i className="fa-solid fa-crown discount-p-icon"></i>
          Flat {discount}
        </p>

        <div className="card-content">

          <div className="d-flex justify-content-between">
            <h4 className="card-content-h4">{name}</h4>
            <p className="badge bg-success px-2 py-2">{rating} <i><GradeIcon fontSize="very small"/></i> </p>
          </div>
          <p className="card-content-p">
              <span style={{lineHeight: '15px'}} className="rupee-symbol"></span> {price} for two
          </p>

          <div>
            <p style={{lineHeight: '15px'}} className="card-content-p2">{description}...</p>
            <p className="card-content-p3">{distance}</p>
          </div>

          <p className="card-paragraph">{location}</p>
             
        </div>
      </div>

   
    
    </div>
  );
};

export default CardView;
