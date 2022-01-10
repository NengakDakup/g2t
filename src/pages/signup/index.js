import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signUp } from "../../firebase";
import { Button, Form, Alert } from "react-bootstrap"

import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import AuthLayout from "../../components/layouts/AuthLayout/AuthLayout";

export default function Signup () {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setError] = useState("");
    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate('');

    const register = () => {
        if (!name){
            setError("Please Enter Your Name");
        } else if(!email){
            setError("Please Enter a Valid Email Address");
        } else if(!password){
            setError("Please Enter a Password");
        } else if( !(password === confirmPassword)){
            setError("Passwords do not Match");
        }  else {
            signUp(name, email, password);
        }
    };

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);

    return (
        <MainLayout fullHeight>
            <AuthLayout title="Welcome To G2T" description="Get Started by creating an account or Loggin in">
                <div className="auth_layout--content d-flex flex-column justify-content-space-evenly">
                    <h1><strong>G2T</strong></h1>
                    <p>Create Your Account Here🚀</p>
                    {err && 
                        <Alert variant='danger'>
                            {err}
                        </Alert>
                    }
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter Full Name" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Create Password" />
                        </Form.Group>

                        <Form.Group className="mb-3">
                            <Form.Control type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} placeholder="Repeat Password" />
                        </Form.Group>
                    </Form>
                    <Button className="mt-3" variant={'success'} onClick={() => register()}>{loading? 'Loading...' : 'Create Account'}</Button>
                    <Button className="mt-3" variant={'danger'} onClick={() => navigate('/login')}> Sign in Instead</Button>
                </div>
            </AuthLayout>
        </MainLayout>
    )
}