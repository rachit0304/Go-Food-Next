import React from 'react'
import "bootstrap/dist/css/bootstrap.min.css";

const DetailsPage = ({image}) => {
  return (

    <div className="container d-flex justify-content-center align-items-center" >
      <div>
        <img
          src={image}
          className="img-fluid"
          style={{ width: "1300px", height: "400px", objectFit: "cover" }}
          alt="Restaurant image"
        />
      </div>
    </div>


  )
}

export default DetailsPage
