import React from 'react'
import first_image from '../public/assets/images/farhad-ibrahimzade-Sk6my6_KTK0-unsplash.jpg'
import second_image from '../public/assets/images/lily-banse--YHSwy6uqvk-unsplash.jpg'
import third_image from '../public/assets/images/pixzolo-photography-3tL4vtrFqTQ-unsplash.jpg'
import 'bootstrap/dist/css/bootstrap.min.css'
import Image from 'next/image'

export default function Caraousel() {
  return (
    <div>
      <div>
      <div
        id="carouselControls"
        className="carousel slide"
        data-bs-ride="carousel"    
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <Image
              src={first_image}
              className="d-block w-100"
              alt="french fries"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={second_image}
              className="d-block w-100"
              alt="salad"
            />
          </div>
          <div className="carousel-item">
            <Image
              src={third_image}
              className="d-block w-100"
              alt="hotdog"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselControls"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
    </div>
  )
}
