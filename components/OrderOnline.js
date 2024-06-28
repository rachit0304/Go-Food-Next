import React from "react";
import MenuItems from "./MenuItems";

const OrderOnline = () => {
  const menuItems = [
    {
      category: "Breakfast",
      items: [
        {
          name: "French Fries",
          price: "₹99",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Burger",
          price: "₹199",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Paneer Tika",
          price: "₹299",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Momos",
          price: "₹199",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Kadhai Paneer",
          price: "₹399",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
        },
        {
          name: "Mix Veg",
          price: "₹149",
          imageSrc: "https://i.imgur.com/2ry8F0i.jpg",
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
          <div className="text-center " >
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
                        <MenuItems item={item}/>
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