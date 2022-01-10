import React, { useEffect, useState } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { Button, Form, Alert } from "react-bootstrap"
import { auth, signIn } from "../../firebase";
import { useAuthState } from "react-firebase-hooks/auth";


import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import AuthLayout from "../../components/layouts/AuthLayout/AuthLayout";

export default function Login () {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [err, setError] = useState("");
    const [user, loading, error] = useAuthState(auth);  
    let navigate = useNavigate('');

    useEffect(() => {
        if (loading) {
          // maybe trigger a loading screen
          return;
        }
        if (user) navigate("/dashboard");
      }, [user, loading]);

    function login(){
        if(!email){
            setError("Please Enter Your Email Address");
        } else if(!password){
            setError("Please Enter Your Password");
        } else {
            signIn(email, password);
        }
    }

    return (
        <MainLayout fullHeight>
            <AuthLayout title="Welcome To G2T" description="Get Started by creating an account or Loggin in">
                <div className="auth_layout--content d-flex flex-column justify-content-space-evenly">
                    <h1><strong>G2T</strong></h1>
                    <p>Log in to Your Account Here🚀</p>
                    {err && 
                        <Alert variant='danger'>
                            {err}
                        </Alert>
                    }
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Control type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" />
                        </Form.Group>
                    </Form>
                    <Link className="text-right" style={{fontSize: '0.8em'}} to="/reset">Forgot Password?</Link>
                    <Button className="mt-3" variant={'success'} onClick={() => login()}>Login</Button>
                    <Button className="mt-3" variant={'danger'} onClick={() => navigate('/signup')}> Create An Account Here</Button>
                </div>
            </AuthLayout>
        </MainLayout>
    )
}