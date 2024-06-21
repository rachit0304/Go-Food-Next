
import React, { useState } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import DetailsPage from '../../components/detailsPage';
import styles from '../../src/app/styles/app.scss'
import Menu from '../../components/Menu';
import DirectionsIcon from '@mui/icons-material/Directions';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ScreenShareOutlinedIcon from '@mui/icons-material/ScreenShareOutlined';


const RestaurantDetails = ({ restaurant }) => {

  const [isOpen , setisOpen] = useState(false);

  const scrollToSection = () => {
    window.scrollTo({
      top: 2000, 
      behavior: 'smooth', 
    });
  };

  const toggleMenu = ()=>{
    setisOpen(!isOpen);
    if(isOpen === true)
    {scrollToSection();}
  }

  if (!restaurant) {
    return <div>Loading...</div>;
  }

  const { name, location, description, ratings, latitude, longitude, city, state, discountOffer} = restaurant;

  return (
    <>
    
    <div className='container mt-2'>
    <DetailsPage image={restaurant.image}/>
    <Container >
 
      <Row>
        <Col>
        
              <h1>{name}</h1>
              <p className='lead'>{description}</p>
              <Card.Subtitle className="mb-2 text-muted fw-normal">{location} {","} {city}</Card.Subtitle>
            

           
            <Col>
            <button type="button" className="btn btn-outline-secondary btn-scroll">
              <i><DirectionsIcon/></i> Directions
              </button>
              <button type="button" className="btn btn-outline-secondary btn-scroll">
              <i><BookmarkIcon/></i> Bookmark
              </button>
              <button type="button" className="btn btn-outline-secondary btn-scroll">
              <i><ScreenShareOutlinedIcon/></i> Share
              </button>

            </Col>




        </Col>

        <Col>

        <p className="badge bg-success "><>{ratings}*</></p>

        <Card.Text><strong>Discount:</strong> {discountOffer}</Card.Text>

        </Col>


      </Row>


      <Row className="mt-4">
        <Col>
          <button className="btn btn-outline-secondary" onClick={toggleMenu}>Menu</button>
          
          {
            isOpen && 
            <Menu restaurantName={restaurant.name} />
      
          }
   
        </Col>
      </Row>
    </Container>
    </div>

    </>
  );
};

export const getServerSideProps = async (context) => {

  const { slug } = context.query;
  const res = await fetch(`http://localhost:3000/api/restaurantPage?id=${slug}`);
  const restaurant = await res.json();
  console.log(restaurant);
  return { props: { restaurant } };
};

export default RestaurantDetails;