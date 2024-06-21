import React, { useState } from 'react'
import styles from '../src/app/styles/app.scss'
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

const menuItems = [
    { name: 'Margherita Pizza', price: 8.99 },
    { name: 'Pepperoni Pizza', price: 9.99 },
    { name: 'BBQ Chicken Pizza', price: 11.99 },
    { name: 'Caesar Salad', price: 6.99 },
    { name: 'Spaghetti Bolognese', price: 12.99 },
    { name: 'Garlic Bread', price: 3.99 },
  ];

const Menu = ({restaurantName}) => {

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


  return (
    <div >

    <div className="row">

      <div className="col-md-8">
      <div className="text-center mb-4">
      <h1 className="display-4">{restaurantName}</h1>
      <hr className="w-50 mx-auto" />
    </div>

        <div className="list-group d-flex">
          {menuItems.map((item, index) => (
            <div key={index} className='list-group-item d-flex justify-content-between align-items-center'>
          
            <span>{item.name}</span>
            <span className="badge bg-primary rounded-pill">${item.price.toFixed(2)}</span>
           
          <div>
            <button className={`${hideClass}`} onClick={add_item}>Add</button>
            <p className={`${add_cart_class}`}> <AddIcon onClick={add_item}/> {" "}{items_in_cart}{" "} <RemoveIcon onClick={remove_item}/></p>
          </div>

            </div>
             

          ))}

      
        </div>
      </div>
    </div>
  </div>
  )
}

export default Menu
