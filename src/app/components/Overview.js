import React from 'react'
import styles from '../../app/styles/app.scss'

const Overview = ({price}) => {
  return (
    <div>
    
        <h3>About this place</h3>
        <p className='fs-4'>Menu</p>

        <div>
        <p className='fs-4'>Cuisines</p>
        <button className='rounded-pill btn btn-outline-secondary mt-0'>North Indian</button>
        <button className='rounded-pill btn btn-outline-secondary mt-0'>Mughlai</button>
        <button className='rounded-pill btn btn-outline-secondary mt-0'>Fast Food</button>
        </div>

        <div>
            <p className='fs-4 mb-1'>People say this place is known For</p>
            <p className='fw-light fs-5'>Interior, Cafe, Owner, Ambiance, Service, Experience</p>
        </div>

        <div>
            <p className='fs-4 mb-1'>Average Cost</p>
            <p className='fw-light fs-5 mb-0'>₹{price} for two people (approx)</p>
            <p className='fw-lighter'>Exclusive of applicable taxes and charges, if any</p>
        </div>

        <div>
          <p className='fs-5 fw-light'>Cash and Cards accepted</p>
        </div>

        <div className='mt-4'>
          <p className='fs-4 mb-1'>More Info</p>
          <div className='d-flex w-25 justify-content-between'>
            <p>Home Delievery</p>
            <p>Takeaway Available</p>
          </div>
          <div className='d-flex w-25 justify-content-between'>
            <p>Family Friendly</p>
            <p>Indoor Available</p>
          </div>
        </div>
    </div>
  )
}

export default Overview
