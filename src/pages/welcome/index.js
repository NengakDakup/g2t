import React, { Component } from "react";
import {useNavigate} from 'react-router-dom'
import { Button } from "react-bootstrap"

import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import AuthLayout from "../../components/layouts/AuthLayout/AuthLayout";

export default function Welcome () {
    let navigate = useNavigate('');

    return (
        <MainLayout fullHeight>
            <AuthLayout title="Welcome To G2T" description="Get Started by creating an account or Loggin in">
                <div className="auth_layout--content d-flex flex-column justify-content-space-evenly">
                    <h1><strong>G2T</strong></h1>
                    <p>Let's Get You Started!😎🚀</p>
                    <Button className="mt-3" variant={'success'} onClick={() => navigate('/login')}>Login To Your Account</Button>
                    <Button className="mt-3" variant={'danger'} onClick={() => navigate('/signup')}> Create An Account </Button>
                </div>
            </AuthLayout>
        </MainLayout>
    )
}