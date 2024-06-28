"use client";
import React, { useState, useEffect } from "react";
import CardView from "./CardView";
import Link from "next/link";

function Restraunts() { 
  const [restaurantdata , setRestaurantdata] = useState([]);

  useEffect( () => {
    const fetchdata = async()=>{
      const res = await fetch("http://localhost:3000/api/getRestaurants");
      const d = await res.json();
      const data = d.restaurants;
      setRestaurantdata(data);

    }

    fetchdata();
   
  }, []);



  return (
    <div className="">
      {console.log(restaurantdata)}

      <ul  className="link">{restaurantdata.map((item)=>(
        <li key={item._id} style={{display: "inline"}}>
     
        <Link className="link" href={`/restaurants/${item._id}`}>  
        <CardView 
        name={item.name}
        rating={item.ratings}
        description={item.description}
        price={item.price}
        location={item.location}
        distance={item.distance}
        food_image={item.image}
        discount={item.discountOffer}
        /></Link>
  
        </li>
       
       
      ))}</ul>
    </div>
  );
}

export default Restraunts;
