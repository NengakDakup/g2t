import React, { Component } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { Button, Form } from "react-bootstrap"

import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import AuthLayout from "../../components/layouts/AuthLayout/AuthLayout";

export default function Reset () {
    let navigate = useNavigate('');

    return (
        <MainLayout fullHeight>
            <AuthLayout title="Welcome To G2T" description="Get Started by creating an account or Loggin in">
                <div className="auth_layout--content d-flex flex-column justify-content-space-evenly">
                    <h1><strong>G2T</strong></h1>
                    <p>Oops😬. You can Reset Your Password Here </p>
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" placeholder="Enter email linked to Account" />
                            <Form.Text muted>
                                A link will be sent to the email address you provide.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <Button className="mt-3" variant={'success'} onClick={() => {}}>Send Reset Link</Button>
                </div>
            </AuthLayout>
        </MainLayout>
    )
}