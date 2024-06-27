import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import Bootstrap components

const Profile = () => {
  const [userData, setUserData] = useState({
    name: '',
    email: ''
  });

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const res = await axios.get('/api/auth/user'); // Replace with your endpoint to fetch user data
        setUserData({
          name: res.data.name,
          email: res.data.email
        });
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, []);

  const { name, email } = userData;

  const onChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      const updatedUser = { name, email };
      const config = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      await axios.put('/api/auth/user', updatedUser, config); // Replace with your endpoint to update user data
      alert('Profile updated successfully!');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2>Edit Profile</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formName">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter your name"
                name="name"
                value={name}
                onChange={onChange}
                required
              />
            </Form.Group>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                name="email"
                value={email}
                onChange={onChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Update Profile
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default Profile;
