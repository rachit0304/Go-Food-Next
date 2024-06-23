import React, { use, useState } from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import DetailsPage from "../../components/detailsPage";
import styles from "../../src/app/styles/app.scss";
import Link from "next/link";
import Menu from "../../components/Menu";
import DirectionsIcon from "@mui/icons-material/Directions";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ScreenShareOutlinedIcon from "@mui/icons-material/ScreenShareOutlined";
import Overview from "../../components/Overview";

const RestaurantDetails = ({ restaurant }) => {
  const [isOpen, setisOpen] = useState(false);
  const [isBookmark, setisBookmark] = useState(false);
  const [menu , setMenu] = useState(false);
  const [overview , setOverview] = useState(true);

  const scrollToSection = () => {
    window.scrollTo({
      top: 2000,
      behavior: "smooth",
    });
  };

  const toggleMenu = () => {
    setisOpen(!isOpen);
    if (isOpen === true) {
      scrollToSection();
    }
  };

  const changeBookmark = () => {
    setisBookmark(!isBookmark);
  };

  const changeMenu = ()=>{
    setOverview(false);
    setMenu(!menu);

  }

  const changeOverview = ()=>{
    setMenu(false);
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
              <h1>{name}</h1>
              <p className="lead">{description}</p>
              <Card.Subtitle className="mb-2 text-muted fw-normal">
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
                <>{ratings}*</>
              </p>

              <Card.Text>
                <strong>Discount:</strong> {discountOffer}
              </Card.Text>
            </Col>
          </Row>

          <div className="mt-4 d-flex">
            <p>
              <h4 onClick={changeOverview} className="fw-light text-secondary mx-4"> <Link style={{textDecoration: 'none' }} href={'/restaurants'}>Overview</Link> </h4>
            </p>

            <p>
              <h4 className="fw-light text-secondary mx-4"><Link style={{textDecoration: 'none'}} href={'/restaurants'}>Order Online</Link></h4>
            </p>
            <p>
              <h4 className="fw-light text-secondary mx-4"><Link style={{textDecoration: 'none'}} href={'/restaurants'}>Reviews</Link></h4>
            </p>
            <p>
              <h4 onClick={changeMenu} className="fw-light text-secondary mx-4"><Link style={{textDecoration: 'none'}} href={'/restaurants'}>Menu</Link></h4>
            </p>
          </div>

          <hr className="mt-0" />

          {overview && <Overview price={price}/>}
          {menu && <Menu/>}

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
