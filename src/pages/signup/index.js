import React, { Component } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { Button, Form } from "react-bootstrap"

import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import AuthLayout from "../../components/layouts/AuthLayout/AuthLayout";

export default function Signup () {
    let navigate = useNavigate('');

    return (
        <MainLayout fullHeight>
            <AuthLayout title="Welcome To G2T" description="Get Started by creating an account or Loggin in">
                <div className="auth_layout--content d-flex flex-column justify-content-space-evenly">
                    <h1><strong>G2T</strong></h1>
                    <p>Create Your Account Here🚀</p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" placeholder="Create Password" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password2" placeholder="Repeat Password" />
                        </Form.Group>
                    </Form>
                    <Button className="mt-3" variant={'success'} onClick={() => {}}>Create Account</Button>
                    <Button className="mt-3" variant={'danger'} onClick={() => navigate('/login')}> Sign in Instead</Button>
                </div>
            </AuthLayout>
        </MainLayout>
    )
}