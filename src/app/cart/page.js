'use client'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Cart = () => {

  const [cart,setCart] = useState();

  useEffect(()=>{
    setCart(JSON.parse(localStorage.getItem('cart')));
    console.log(cart);
  },[])


  return (
    <div className="container mt-3">
      <div class="row">
        <div class="col">Item</div>
        <div class="col">Food</div>
        <div class="col">Name</div>
        <div class="col">Price</div>
        <div class="col">Quantity</div>
        <div class="col">Total</div>
        <div className="col"></div>
      </div>

      <div className="tab-content mt-5">
            {cart?.length == 0 ? <div> No items </div> : 
            <div className="row g-4">
              {
              cart && cart.map((item, itemIndex) => (
                <div className="col-lg-12" key={itemIndex}>
                  <div class="row">
                    <div class="col">{itemIndex+1}</div>
                   
                    <div className="col"><img src={item.imageSrc} alt="" style={{ width: 60 , height: 30 }}/></div>
                    <div class="col">{item.name}</div>
                 

                    <div class="col">{item.price}</div>
                    <div class="col">0</div>
                    <div class="col">Total</div>
                    <button className="col btn btn-outline-success">Delete</button>
                  </div>
                </div>
              ))}
            </div>
            }
  
      </div>
    </div>
  );
};

export default Cart;
