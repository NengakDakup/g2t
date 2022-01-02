import React, { Component } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { Button, Form } from "react-bootstrap"

import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import AuthLayout from "../../components/layouts/AuthLayout/AuthLayout";

export default function Login () {
    let navigate = useNavigate('');

    return (
        <MainLayout fullHeight>
            <AuthLayout title="Welcome To G2T" description="Get Started by creating an account or Loggin in">
                <div className="auth_layout--content d-flex flex-column justify-content-space-evenly">
                    <h1><strong>G2T</strong></h1>
                    <p>Log in to Your Account Here🚀</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <Link className="text-right" style={{fontSize: '0.8em'}} to="/reset">Forgot Password?</Link>
                    <Button className="mt-3" variant={'success'} onClick={() => navigate('/login')}>Login</Button>
                    <Button className="mt-3" variant={'danger'} onClick={() => navigate('/signup')}> Create An Account Here</Button>
                </div>
            </AuthLayout>
        </MainLayout>
    )
}