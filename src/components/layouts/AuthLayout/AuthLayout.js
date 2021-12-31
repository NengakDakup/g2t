import React from "react";
import {Col, Row} from 'react-bootstrap';

import WelcomeBG from '../../../assets/images/welcome_bg.jpg';

import './AuthLayout.scss'

export default function AuthLayout({title, description, children}){
    return (
        <>
            <Row className="fixed_height--100" >
                <Col className="auth_layout--left col-12 col-md-6" style={{backgroundImage: `url(${WelcomeBG})`}}>
                    <h1 className="mt-5" style={{fontSize: '2em', }}><strong>{title}</strong></h1><br/>
                    <h1 className="" style={{fontSize: '1.5em', width: '80%'}}>{description}</h1>
                </Col>
                <Col className="auth_layout--right col-12 col-md-6">
                    {children}
                </Col>
            </Row>
        </>
    )
}