import react, {useState} from 'react';
import {Form, Row, Col } from 'react-bootstrap';

export default function EmploymentForm({setData, data, disabled}){

    function updateItem(index, val){
        setData(data.map((item, i) => {
            if(i === index){
                item.value = val;
                return item;
            } else {
                return item;
            }
        }))
    }

    return (
            <Form.Group className="mb-3">
                <h1>Employment</h1>
                <Row className="mb-3">
                    {data.map((item, index) => {
                        return (
                            <Col className="col-12 col-md-6 mt-3" key={index}>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>{item.title}</Form.Label>
                                <Form.Control value={item.value} disabled={disabled} type={item.type} placeholder={`Enter ${item.title}`} onChange={(e) => updateItem(index, e.target.value)} />
                            </Form.Group>
                            </Col>
                        )
                    })}
                </Row>
            </Form.Group>
    
    )
}