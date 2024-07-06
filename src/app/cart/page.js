'use client'
import React, { useEffect, useState } from "react";

const Cart = () => {

  const [cart,setCart] = useState([]);

  useEffect(()=>{
    const cart = localStorage.getItem('cart');
    if (cart) {
      setCart(JSON.parse(cart));

    }  
  },[])


  const handleRemovefromCart=(id)=>{

    if (cart) {
      let cartItems = cart;
      cartItems = cartItems.filter(item => item.id !== id);
      setCart(cartItems);
      localStorage.setItem('cart', JSON.stringify(cartItems))
    } 
  }



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
            {cart?.length == 0 ? <div className="mt-4"><div className="fs-4 text-center mt-5"> No items in the cart </div> </div>: 
            <div className="row g-4">
              {
              cart && cart.map((item, itemIndex) => (
                <div className="col-lg-12" key={itemIndex}>
                  <div class="row">
                    <div class="col">{itemIndex+1}</div>
                   
                    <div className="col"><img src={item.imageSrc} alt="" style={{ width: 60 , height: 30 }}/></div>
                    <div class="col">{item.name}</div>
                 

                    <div class="col">{item.price}</div>
                    <div class="col">{item.qty}</div>
                    <div class="col">{item.qty*item.price}</div>
                    <button className="col btn btn-outline-success" onClick={()=>handleRemovefromCart(item.id)}>Delete</button>
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
