import React, { useState } from "react";
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

const RestaurantDetails = ({ restaurant }) => {
  const [isOpen, setisOpen] = useState(false);
  const [isBookmark, setisBookmark] = useState(false);
  const [orderOnline , setOrderOnline] = useState(false);
  const [overview , setOverview] = useState(true);

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
    discountOffer,
  } = restaurant;

  return (
    <>
      <div className="container mt-2">
        <DetailsPage image={restaurant.image} />
        <Container>
          <Row>
            <Col>
              <h1 className="mt-2">{name}</h1>
              <p className="lead mb-0">{description}</p>
              <Card.Subtitle className="mb-2 mt-1 text-muted fw-light fs-5">
                {location} {","} {city}
              </Card.Subtitle>

              <Col>
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-scroll"
                >
                  <i>
                    <DirectionsIcon />
                  </i>{" "}
                  Directions
                </button>
                {isBookmark == true ? (
                  <button
                    type="button"
                    onClick={changeBookmark}
                    className="btn btn-outline-secondary btn-scroll"
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
                    className="btn btn-outline-secondary btn-scroll"
                  >
                    <i>
                      <BookmarkBorderIcon />
                    </i>{" "}
                    Bookmark
                  </button>
                )}
                <button
                  type="button"
                  className="btn btn-outline-secondary btn-scroll"
                >
                  <i>
                    <ScreenShareOutlinedIcon />
                  </i>{" "}
                  Share
                </button>
              </Col>
            </Col>

            <Col className="mt-4">
              <p className="badge bg-success px-2 py-2">
                {ratings} <i className="py-2"><GradeIcon fontSize='vsmall'/></i>
              </p>

              <Card.Text>
                <strong>Discount:</strong> {discountOffer}
              </Card.Text>
            </Col>
          </Row>

          <div className="mt-4 d-flex">
            <p>
              <h4 onClick={changeOverview} className="fw-light text-secondary mx-4"> Overview </h4>
            </p>

            <p>
              <h4 onClick={changeOrderOnline} className="fw-light text-secondary mx-4"><a style={{textDecoration: 'none'}}>Order Online</a></h4>
            </p>
            <p>
              <h4 className="fw-light text-secondary mx-4"><a style={{textDecoration: 'none'}}>Reviews</a></h4>
            </p>
            <p>
              <h4 className="fw-light text-secondary mx-4"><a style={{textDecoration: 'none'}}>Menu</a></h4>
            </p>
          </div>

          <hr className="mt-0" />
          {overview && <Overview price={price}/>}
          {orderOnline && <OrderOnline/>}

        </Container>
      </div>
    </>
  );
};

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
