import React from 'react'
import styles from '../src/app/styles/app.scss'

const Overview = ({price}) => {
  return (
    <div>
    
        <h3>About this place</h3>
        <p className='lead'>Menu</p>
        <div>
        <p className='lead'>Cuisines</p>

        <button>North Indian</button>
        <button>Mughlai</button>
        <button>Fast Food</button>
        </div>

        <div>
            <p>People say this place is known For</p>
            <p></p>
        </div>

        <div>
            <p>Average Cost</p>
            <p ><span className="rupee-symbol"></span>{price} for two people (approx)</p>
        </div>

    </div>
  )
}

export default Overview
