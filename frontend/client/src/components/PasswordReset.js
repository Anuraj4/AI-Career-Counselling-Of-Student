import React, { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; // Import Bootstrap components

const PasswordReset = () => {
  const [email, setEmail] = useState('');

  const onChange = (e) => setEmail(e.target.value);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      // Implement backend logic for sending password reset email
      alert(`Password reset email sent to ${email}`);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <Container>
      <Row className="justify-content-center mt-5">
        <Col md={6}>
          <h2>Password Reset</h2>
          <Form onSubmit={onSubmit}>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={onChange}
                required
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Reset Password
            </Button>
          </Form>
        </Col>
      </Row>
    </Container>
  );
};

export default PasswordReset;
