import React, { useEffect, useState, useContext } from "react";
import MenuItems from "./MenuItems";

const OrderOnline = ({cartNumber ,setCartNumber}) => {
  const menuItems = [
    {
      category: "Breakfast",
      items: [
        {
          id: '1',
          name: "French Fries",
          price: "99",
          qty: 1,
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          id: '2',
          name: "Burger",
          price: "199",
          qty: 1,

          imageSrc: "https://images.pexels.com/photos/341044/pexels-photo-341044.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
        },
        {
          id: '3',
          name: "Paneer Tika",
          price: "299",
          qty: 1,

          imageSrc: "https://images.pexels.com/photos/2825225/pexels-photo-2825225.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          id: '4',
          name: "Momos",
          price: "199",
          qty: 1,

          imageSrc: "https://images.pexels.com/photos/4078059/pexels-photo-4078059.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          id: '5',
          name: "Kadhai Paneer",
          price: "399",
          qty: 1,

          imageSrc: "https://images.pexels.com/photos/4062498/pexels-photo-4062498.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        {
          id: '6',
          name: "Mix Veg",
          price: "149",
          qty: 1,
          imageSrc: "https://images.pexels.com/photos/341045/pexels-photo-341045.png?auto=compress&cs=tinysrgb&w=600&lazy=load",
        },
        // Add more breakfast items as needed
      ],
    },
    {
      category: "Lunch",
      items: [
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/c0SuIAz.jpg",
        },
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/c0SuIAz.jpg",
        },
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/c0SuIAz.jpg",
        },
        // Add more lunch items as needed
      ],
    },
    {
      category: "Dinner",
      items: [
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Chicken Burger",
          price: "$115",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
      ],
    },
  ];


  return (
    
    <React.Fragment>
      <div className="py-2">
        <div className="container">
          <div className="text-center">
            <h5 className="text-center fw-bold mb-5">
              Food Menu
            </h5>
          </div>
          <div
            className=" text-center "
          >
            <div className="tab-content">
              {menuItems.map((category, index) => (
                <div
                  id={`tab-${index + 1}`}
                  className={`tab-pane fade show p-0 ${
                    index === 0 ? "active" : ""
                  }`}
                  key={index}
                >
                  <div className="row g-4">
                    {category.items.map((item, itemIndex) => (
                      <div className="col-lg-6" key={itemIndex}>
                        <MenuItems item={item} cartNumber={cartNumber} setCartNumber={setCartNumber}/>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  
  );
};

export default OrderOnline;