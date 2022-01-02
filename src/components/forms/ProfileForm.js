import react from 'react';
import {Form, Row, Col } from 'react-bootstrap';

export default function ProfileForm(){
    return (
            <Form.Group className="mb-3">
                            <Row className="mb-3">
                                <Form.Group as={Col} controlId="formGridEmail">
                                <Form.Label>Email</Form.Label>
                                <Form.Control type="email" placeholder="Enter email" />
                                </Form.Group>

                                <Form.Group as={Col} controlId="formGridPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control type="password" placeholder="Password" />
                            </Form.Group>
                            </Row>
                        </Form.Group>
    
    )
}