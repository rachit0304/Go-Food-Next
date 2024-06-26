import React, { useEffect, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DetailsPage from "../../components/detailsPage";
import styles from "../../src/app/styles/app.scss";
import OrderOnline from "../../components/OrderOnline";
import DirectionsIcon from "@mui/icons-material/Directions";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import GradeIcon from '@mui/icons-material/Grade';
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import Overview from "../../components/Overview";
import Navbar from '../../components/Navbar'


const RestaurantDetails = ({ restaurant }) => {

  const [isOpen, setisOpen] = useState(false);
  const [isBookmark, setisBookmark] = useState(false);
  const [orderOnline , setOrderOnline] = useState(false);
  const [overview , setOverview] = useState(true);
  const [cart , setCart] = useState();


  const addItem=(item) => {
    setCart(item);
  };

  const changeBookmark = () => {
    setisBookmark(!isBookmark);
  };

  const changeOrderOnline = ()=>{
    setOverview(false);
    setOrderOnline(true);

  }

  const changeOverview = ()=>{
    setOrderOnline(false);
    setOverview(true);
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const {
    name,
    location,
    description,
    ratings,
    latitude,
    longitude,
    city,
    state,
    price,
    discount,
  } = restaurant;

  return (
    <>
      <div className="container mt-2">
        <Navbar cart={cart} addItem={addItem} />
        <DetailsPage image={restaurant.image} />
        <Container>
          <Row>
            <Col>
              <h1 className="mt-2">{name}</h1>
              <p className="lead mb-0">{description}</p>
              <Card.Subtitle className="mb-2 mt-1 text-muted fw-light fs-6">
                {location} {","} {city}
              </Card.Subtitle>

              <Col className="d-flex mt-4">
                <button
                  type="button"
                  className="custom-btn fw-light"
                >
                  <i>
                    <DirectionsIcon />
                  </i>{" "}
                  Direction
                </button>
                {isBookmark == true ? (
                  <button
                    type="button"
                    onClick={changeBookmark}
                    className="custom-btn fw-light"
                  >
                    <i>
                      <BookmarkIcon />
                    </i>{" "}
                    Bookmark
                  </button>
                ) : (
                  <button
                    type="button"
                    onClick={changeBookmark}
                    className="custom-btn fw-light"
                  >
                    <i>
                      <BookmarkBorderIcon />
                    </i>{" "}
                    Bookmark
                  </button>
                )}
                <button
                  type="button"
                  className="custom-btn fw-light" 
                >
                  <i>
                    <ScreenShareOutlinedIcon />
                  </i>{" "}
                  Share
                </button>
              </Col>
            </Col>

            <Col className="mt-4">
           
            <p className="badge bg-success px-2 py-1 fs-6">
                {ratings} 

              <i><GradeIcon fontSize='very small'/></i>
              </p>
            
            
            </Col>
          </Row>

          <div className="mt-4 d-flex">
            <p onClick={changeOverview} className="fw-light text-secondary mx-4 fs-4">
               Overview 
            </p>

            <p onClick={changeOrderOnline} className="fw-light text-secondary mx-4 fs-4">
              Order Online
            </p>
            <p className="fw-light text-secondary mx-4 fs-4">
            Reviews
            </p>
            <p className="fw-light text-secondary mx-4 fs-4">
              Menu
            </p>
          </div>

          <hr className="mt-0" />
          {overview && <Overview />}
          {orderOnline && <OrderOnline addItem={addItem}/>}

        </Container>
      </div>
    </>
  );
};

useEffect

export const getServerSideProps = async (context) => {
  const { slug } = context.query;
  const res = await fetch(
    `http://localhost:3000/api/restaurantPage?id=${slug}`
  );
  const restaurant = await res.json();
  console.log(restaurant);
  return { props: { restaurant } };
};

export default RestaurantDetails;
