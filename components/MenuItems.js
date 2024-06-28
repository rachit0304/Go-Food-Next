import React, { useState } from 'react'
import styles from '../src/app/styles/app.scss'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const MenuItems = ({item}) => {

    let [items_in_cart, setItems_in_cart] = useState(0);
    let price = item.price;
    let totalPrice = 0;

    const add_cart_class = items_in_cart === 0 ? "d-none" : "";
    const hideClass = items_in_cart > 0 ? "d-none" : "";
  
    const add_item = () => {
      setItems_in_cart(items_in_cart + 1);
      
    };
    const remove_item = () => {
      if (items_in_cart > 0) {
        setItems_in_cart(items_in_cart - 1);
      }
    };

    const add_to_cart=()=>{
        alert(`${items_in_cart} items added to cart`);
    }

  return (
    <div className="d-flex align-items-center">
      <img
      className=" rounded"
      src={item.imageSrc}
      alt=""
      style={{ width: 80 , height: 60 }}
     />
    <div className="w-100 d-flex flex-column text-start ps-4">
  
      <h5 className="d-flex border-bottom pb-1">
        <span>{item.name}</span>
      </h5>
        <div className='d-flex justify-content-between'>
        <span className="text-primary">{price}</span>
  
        <div>
        <div className='d-flex justify-content-between'> 
        <span className={`${add_cart_class}`}> <button onClick={add_item} className='btn btn-outline-primary'><AddIcon fontSize='vsmall' /></button> </span>
        <span className={`${add_cart_class} m-2`}>{items_in_cart}</span>
        <span className={`${add_cart_class}`}> <button onClick={remove_item} className='btn btn-outline-primary'><RemoveIcon fontSize='vsmall' /></button> </span>
        </div>
        
        <button className={`btn btn-primary ${hideClass}`} onClick={add_item}>Add</button>
        </div>
        </div>
    </div>
  </div>
  )
}

export default MenuItems
