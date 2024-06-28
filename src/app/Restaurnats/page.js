import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useRouter } from "next/router";


const Restaurants = ({ res }) => {
  const router = useRouter();
  const handleDelete = async (id)=>{
    const response = await fetch("http://localhost:3000/api/deleterestaurant", {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });

    const data = await response.json();
    if (response.ok) {
      alert(data.message);
      router.reload();
    } else {
      alert(data.message);
    }
  }

  const handleEdit= async (id)=>{
    const response = await fetch("http://localhost:3000/api/updateRestaurants", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ id }),
    });
  }
  return (
    <Container className="mt-5">
    <Row className="gy-4">
      {res.restaurants.map((item) => (
        <Col key={item._id} xs={12} md={6} lg={4}>
          <Card className="h-100">
            <Card.Body>
              <Card.Title>{item.name}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">{item.location}</Card.Subtitle>
              <Button variant="primary" className="me-2" onClick={() => handleEdit(item._id)}>Edit</Button>
              <Button variant="danger" onClick={() => handleDelete(item._id)}>Delete</Button>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  </Container>
  );
};

export const getServerSideProps = async () => {
  const res = await (
    await fetch("http://localhost:3000/api/getRestaurants")
  ).json();

  return { props: { res } };
};

export default Restaurants;