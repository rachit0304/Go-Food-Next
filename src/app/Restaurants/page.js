'use client'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useRouter } from "next/navigation";


const Restaurants = () => {

  const [data,setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getRestaurants");
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const result = await response.json();
        setData(result);
      } catch (error) {
        res.json(error);
      }
    };

    fetchData();
  }, []);

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
      router.refresh();
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
      {data && data.restaurants.map((item) => (
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


export default Restaurants;