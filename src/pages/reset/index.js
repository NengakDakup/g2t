import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom'
import { Button, Form, Alert } from "react-bootstrap"
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, sendPasswordReset } from "../../firebase";

import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import AuthLayout from "../../components/layouts/AuthLayout/AuthLayout";

export default function Reset () {
    let [email, setEmail] = useState("");
    let [err, setError] = useState('');
    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate('');

    useEffect(() => {
        if (loading) return;
        if (user) navigate("/dashboard");
    }, [user, loading]);

    function sendReset(){
        if(!email){
            setError("Please Enter a Valid Email Address");
        } else {
            sendPasswordReset(email);
        }
    }


    return (
        <MainLayout fullHeight>
            <AuthLayout title="Welcome To G2T" description="Get Started by creating an account or Loggin in">
                <div className="auth_layout--content d-flex flex-column justify-content-space-evenly">
                    <h1><strong>G2T</strong></h1>
                    <p>Oops😬. You can Reset Your Password Here </p>
                    {err && 
                        <Alert variant='danger'>
                            {err}
                        </Alert>
                    }
                    <Form>
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Control value={email} onChange={(e) => setEmail(e.target.value)} type="email" placeholder="Enter email linked to Account" />
                            <Form.Text muted>
                                A link will be sent to the email address you provide.
                            </Form.Text>
                        </Form.Group>
                    </Form>
                    <Button className="mt-3" variant={'success'} onClick={sendReset}>Send Reset Link</Button>
                </div>
            </AuthLayout>
        </MainLayout>
    )
}