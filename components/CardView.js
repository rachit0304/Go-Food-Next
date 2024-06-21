'use client'
import React from "react";
import { useState } from "react";
import styles from '../src/app/styles/app.scss'

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
  let [items_in_cart, setItems_in_cart] = useState(0);

  const add_cart_class = items_in_cart === 0 ? "" : "";
  const hideClass = items_in_cart > 0 ? "" : "hidden";

  const add_item = () => {
    setItems_in_cart(items_in_cart + 1);
  };
  const remove_item = () => {
    if (items_in_cart > 0) {
      setItems_in_cart(items_in_cart - 1);
    }
  };

  const add_in_cart = () => {
    if (items_in_cart === 0) setItems_in_cart(items_in_cart + 1);
    else {
      localStorage.setItem(`${name}`, `${items_in_cart}`);
      console.log(localStorage);
    }
  };


  return (
    <div className="card-view-first">

      <div className="card-view" >
        <img className="card-image" src={food_image} alt="food-image" />

        <p className="discount-p">
          <i className="fa-solid fa-crown discount-p-icon"></i>
          Flat {discount}
        </p>

        <div className="card-content">
          {/* <div className="cart_add">
            <i
              className={`fa-solid fa-plus ${hideClass}`}
              onClick={add_item}
            ></i>
            <p className={`${hideClass}`}> {" " + items_in_cart + " "} </p>
            <i
              className={`fa-solid fa-minus ${hideClass}`}
              onClick={remove_item}
            ></i>
            <button className={`${add_cart_class}`} onClick={add_in_cart}>
              Add
            </button>
          </div> */}

          <div>
            <p className="card-rating">{rating}*</p>
            <h4 className="card-content-h4">{name}</h4>
            <p className="card-content-p">
              <span style={{lineHeight: '15px'}} className="rupee-symbol"></span> {price} for two
            </p>
          </div>

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
