'use client'
import React, { useEffect, useState } from "react";
import { useCart } from "../context/CartContext";
import { useRouter } from "next/navigation";

const Cart = () => {
  const router = useRouter();
  const { cart, dispatch } = useCart();
  const [checkoutMessage, setCheckoutMessage] = useState('');

  const [data,setData] = useState([]);

  useEffect(()=>{
    const cart = localStorage.getItem('cart');
    if (cart) {
      setData(JSON.parse(cart));

    }  
  },[]);


  const handleRemovefromCart=(id)=>{

    if (data) {
      let cartItems = data;
      cartItems = cartItems.filter(item => item.id !== id);
      setData(cartItems);
      localStorage.setItem('cart', JSON.stringify(cartItems))
    } 
  }


  const handleCheckout = () => {
    
    if (cart.length > 0) {
      dispatch({ type: 'INITIALIZE_CART', payload: [] });
      setCheckoutMessage('Thank you for your purchase! Your order has been processed.');
      setData([]);
    } else {
      setCheckoutMessage('Your cart is empty.');
    }
  };



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
            {data?.length == 0 ? <div className="mt-4"><div className="fs-4 text-center mt-5"> No items in the cart </div> </div>: 
            <div className="row g-4">
              {
              data && data.map((item, itemIndex) => (
                <div className="col-lg-12" key={itemIndex}>
                  <div class="row">
                    <div class="col">{itemIndex+1}</div>
                   
                    <div className="col"><img src={item.imageSrc} alt="" style={{ width: 60 , height: 30 }}/></div>
                    <div class="col">{item.name}</div>
                 

                    <div class="col">₹{item.price}</div>
                    <div class="col">{item.qty}</div>
                    <div class="col">₹{item.qty * parseInt(item.price)}</div>
                    <button className="col btn btn-outline-success" onClick={()=>handleRemovefromCart(item.id)}>Delete</button>
                  </div>
                </div>
              ))}
            </div>
            }
  
      </div>
      <button className="btn btn-success mt-3 " onClick={handleCheckout}>Checkout</button>
      {checkoutMessage && (
        <div className="alert alert-success mt-4">
          {checkoutMessage}
        </div>
      )}
    </div>
  );
};

export default Cart;
