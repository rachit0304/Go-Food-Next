import React, { useState } from 'react'
import styles from '../src/app/styles/app.scss'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';



const MenuItems = ({item}) => {

    let [items_in_cart, setItems_in_cart] = useState(0);

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
      width={200}
      height={200}
      className="flex-shrink-0 img-fluid rounded"
      src={item.imageSrc}
      alt=""
      style={{ width: 80 }}
    />
    <div className="w-100 d-flex flex-column text-start ps-4">
      <h5 className="d-flex justify-content-between border-bottom pb-2">
        <span>{item.name}</span>
        <span className="text-primary">{item.price}</span>
        <div>
        <button className={`btn btn-primary ${hideClass}`} onClick={add_item}>Add</button>
        <span className={`${add_cart_class} m-3`}><AddIcon onClick={add_item}/></span>
        <span className={`${add_cart_class}`}>{items_in_cart}</span>
        <span className={`${add_cart_class} m-3`}><RemoveIcon onClick={remove_item} /></span>
        </div>

        <button className={`${add_cart_class} btn btn-primary mt-0`} onClick={add_to_cart}>Add</button>
      </h5>
      <small className="fst-italic">
        {item.description}
      </small>
    </div>
  </div>
  )
}

export default MenuItems
