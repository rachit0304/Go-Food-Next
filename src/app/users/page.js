'use client'
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { useRouter } from "next/navigation"

const Users = ({ res }) => {

  const [data,setData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/getUsers");
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
    const response = await fetch("http://localhost:3000/api/deleteuser", {
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
  return (
    <Container className="mt-5">
      <Row>
        {data && data.users.map((item) => (
          <Col key={item._id} md={6} lg={4} className="mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{item.name}</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">User ID: {item._id}</Card.Subtitle>
                <Button variant="info" className="me-2">Show Permissions</Button>
                <Button variant="danger" onClick={()=>handleDelete(item._id)} >Delete</Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};


export default Users;