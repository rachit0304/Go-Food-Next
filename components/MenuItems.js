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
        
    }

  return (
    <div className="d-flex align-items-center mb-3">
      <div className="d-flex flex-column mr-4">
        <div className="d-flex align-items-center mb-2">
          <p className="me-4 mb-0">{item.name}</p>
          <p className="badge bg-primary rounded-pill mb-0">${item.price.toFixed(2)}</p>
        </div>
        <div>
          <button className={`btn btn-primary ${hideClass} me-2`} onClick={add_item}>
            Add
          </button>
          <p className={`d-flex align-items-center mb-0 ${add_cart_class}`}>
            <AddIcon className="me-2" onClick={add_item} />{" "}
            {items_in_cart}{" "}
            <RemoveIcon className="ms-2" onClick={remove_item} />
          </p>

          <button className={`btn btn-primary ${add_cart_class} me-2`} onClick={add_to_cart}>
            Add
          </button>
        </div>
      </div>
    </div>
  )
}

export default MenuItems
