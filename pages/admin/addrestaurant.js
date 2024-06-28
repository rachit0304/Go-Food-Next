import React, { useState } from 'react'
import "bootstrap/dist/css/bootstrap.min.css";
import { useRouter } from "next/router";


const addrestaurant = () => {

    const router = useRouter();

    const[id,setId] = useState();
    const[name,setName] = useState("");
    const[description,setDescription] = useState("");
    const[ratings, setRatings] = useState("");
    const[location,setLocation] = useState("");
    const[latitude,setLatitude] = useState("");
    const[longitude,setLongitude] = useState("");
    const[price,setPrice] = useState("");
    const[discount,setDiscount] = useState("");
    const[city,setCity] = useState("");
    const[state,setState] = useState("");
    const[image,setImage] = useState("");
  
    
      const handleChange=(e)=>{
        let key = e.target.name;
        switch (key) {
            case 'name':
            setName(e.target.value);
            break;
            case 'id':
              setId(e.target.value);
            break;
            case 'description':
                setDescription(e.target.value);
            break;
            case 'location':
                setLocation(e.target.value);
            break;
            case 'latitude':
                setLatitude(e.target.value);
            break;
            case 'longitude':
                setLongitude(e.target.value);
            break;
            case 'city':
                setCity(e.target.value);
            break;
            case 'state':
                setState(e.target.value);
            break;
            case 'price':
                setPrice(e.target.value);
            break;
            case 'ratings':
                setRatings(e.target.value);
            break;
            
            case 'discount':
              setDiscount(e.target.value);
            break;
            case 'image':
              setImage(e.target.value);
            break;
        
            default:
            break;
        }
      
      }

      const handleSubmit =async (e)=>{
        e.preventDefault();
        let data = {id,name,description,ratings,price,image,location,city,state,discount,latitude,longitude};
        let res = await fetch('http://localhost:3000/api/addrestaurants', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })

        let response = await res.json();
        console.log(response);

        if(response.success == "Success"){
          alert("Your Restaurant is added Successfully");
          router.push('/admin');

        }
    }
  return (
    <div>
        <h2>Add restaurants to Go-Food</h2>
        <form className="form-restaurant-add container mt-5">
      <div className="row mb-3">
        <label htmlFor="id" className="col-sm-2 col-form-label">Id</label>
        <div className="col-sm-10">
          <input
            value={id}
            onChange={handleChange}
            type="text"
            name="id"
            id="id"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="name" className="col-sm-2 col-form-label">Name of the Restaurant</label>
        <div className="col-sm-10">
          <input
            value={name}
            onChange={handleChange}
            type="text"
            name="name"
            id="name"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="description" className="col-sm-2 col-form-label">Description</label>
        <div className="col-sm-10">
          <input
            value={description}
            onChange={handleChange}
            type="text"
            name="description"
            id="description"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="price" className="col-sm-2 col-form-label">Price</label>
        <div className="col-sm-10">
          <input
            value={price}
            onChange={handleChange}
            type="text"
            name="price"
            id="price"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="ratings" className="col-sm-2 col-form-label">Ratings</label>
        <div className="col-sm-10">
          <input
            value={ratings}
            onChange={handleChange}
            type="text"
            name="ratings"
            id="ratings"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="location" className="col-sm-2 col-form-label">Location</label>
        <div className="col-sm-10">
          <input
            value={location}
            onChange={handleChange}
            type="text"
            name="location"
            id="location"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="image" className="col-sm-2 col-form-label">Image</label>
        <div className="col-sm-10">
          <input
            value={image}
            onChange={handleChange}
            type="text"
            name="image"
            id="image"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="latitude" className="col-sm-2 col-form-label">Latitude</label>
        <div className="col-sm-10">
          <input
            value={latitude}
            onChange={handleChange}
            type="text"
            name="latitude"
            id="latitude"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="longitude" className="col-sm-2 col-form-label">Longitude</label>
        <div className="col-sm-10">
          <input
            value={longitude}
            onChange={handleChange}
            type="text"
            name="longitude"
            id="longitude"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="city" className="col-sm-2 col-form-label">City</label>
        <div className="col-sm-10">
          <input
            value={city}
            onChange={handleChange}
            type="text"
            name="city"
            id="city"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="state" className="col-sm-2 col-form-label">State</label>
        <div className="col-sm-10">
          <input
            value={state}
            onChange={handleChange}
            type="text"
            name="state"
            id="state"
            className="form-control"
          />
        </div>
      </div>
      <div className="row mb-3">
        <label htmlFor="discount" className="col-sm-2 col-form-label">Discount</label>
        <div className="col-sm-10">
          <input
            value={discount}
            onChange={handleChange}
            type="text"
            name="discount"
            id="discount"
            className="form-control"
          />
        </div>
      </div>
      <button type="submit" onClick={handleSubmit} className="btn btn-primary">Register</button>
    </form>

    </div>
  )
}

export default addrestaurant
