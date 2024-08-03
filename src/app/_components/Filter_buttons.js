import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'


const Filter_buttons = () => {
  return (
    <div className='container'>
      <div className="btn-scroll-div ms-lg-5">
      <button type="button" className="btn btn-outline-secondary btn-scroll">
        <i className="fa-solid fa-filter"></i>Filters
      </button>
      <button type="button" className="btn btn-outline-secondary btn-scroll">
        <i className="fa-solid fa-crown"></i>
        Gold
      </button>
      <button type="button" className="btn btn-outline-secondary btn-scroll">
        Outdoor Seating
      </button>
      <button type="button" className="btn btn-outline-secondary btn-scroll">
        Rating
      </button>
      <button type="button" className="btn btn-outline-secondary btn-scroll">
        Serves Alcohol
      </button>
      <button type="button" className="btn btn-outline-secondary btn-scroll">
        Open Now
      </button>
    </div>

    
    </div>
  )
}

export default Filter_buttons
