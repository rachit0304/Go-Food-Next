import React from 'react'
import styles from '../src/app/styles/app.scss'
import MenuItems from './MenuItems';


const menuItems = [
  { name: 'Margherita Pizza', price: 8.99 },
  { name: 'Pepperoni Pizza', price: 9.99 },
  { name: 'BBQ Chicken Pizza', price: 11.99 },
  { name: 'Caesar Salad', price: 6.99 },
  { name: 'Spaghetti Bolognese', price: 12.99 },
  { name: 'Garlic Bread', price: 3.99 },
];

const Menu = ({restaurantName}) => {

  return (
    <div >

    <div className="row">

      <div className="col-md-8">
      <div className="text-center mb-4">
      <h1 className="display-4">{restaurantName}</h1>
      <hr className="w-50 mx-auto" />
    </div>
      {
        menuItems.map((item,index)=>(
        <MenuItems  key={index} item={item}/>
        ))
      }
      </div>
    </div>
  </div>
  )
}

export default Menu
