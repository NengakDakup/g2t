import react, {useState} from 'react';
import {Form, Row, Col } from 'react-bootstrap';

export default function PreviousEmploymentForm({updateData, data, index, disabled}){

    function updateItem(index, val){
        updateData(data.map((item, i) => {
            if(i === index){
                item.value = val;
                return item;
            } else {
                return item;
            }
        }), index);
        
    }

    function renderInput(index, item){
        switch (item.type) {
            case 'text':
                return <Form.Control value={item.value} disabled={disabled} type={item.type} placeholder={`Enter ${item.title}`} onChange={(e) => updateItem(index, e.target.value)} />
            case 'select':
                return <Form.Select disabled={disabled} onChange={(e) => updateItem(index, e.target.value)}>
                            {item.options.map((item, i) => {
                                if(i==0){
                                    return <><option>Select</option><option key={i}>{item}</option></>
                                } else return <option key={i}>{item}</option>
                                
                            })}
                        </Form.Select>
        
            default:
                return <Form.Control value={item.value} disabled={disabled} type={item.type} placeholder={`Enter ${item.title}`} onChange={(e) => updateItem(index, e.target.value)} />
        }
    }

    return (
            <Form.Group className="mb-3">
                <h4>Previous Employment</h4>
                <Row className="mb-3">
                {data.map((item, index) => {
                        if(item.requiredTitle){
                            
                            let requiredValue = data.find(element => element.title == item.requiredTitle).value;

                            console.log('rtitle', requiredValue);
                            if(requiredValue === item.requiredValue){
                                return (
                                    <Col className="col-12 col-md-6 mt-3" key={index}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label>{item.title}</Form.Label>
                                        {renderInput(index, item)}
                                        
                                    </Form.Group>
                                    </Col>
                                )
                            }
                        } else {
                            return (
                                <Col className="col-12 col-md-6 mt-3" key={index}>
                                    <Form.Group controlId="formGridEmail">
                                        <Form.Label>{item.title}</Form.Label>
                                        {renderInput(index, item)}
                                        
                                    </Form.Group>
                                </Col>
                            )
                        }
                        
                    })}
                </Row>
            </Form.Group>
    
    )
}