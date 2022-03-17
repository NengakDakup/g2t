import React, { useState, useEffect } from "react";
import { useNavigate} from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, signUp } from "../../firebase";
import { Button, Form, Alert } from "react-bootstrap"


import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import AuthLayout from "../../components/layouts/AuthLayout/AuthLayout";

const axios = require('axios').default;

export default function Signup () {
    const [matric, setMatric] = useState("");
    const [graduationYear, setGraduationYear] = useState("");
    const [validated, setValidated] = useState(false) 
    const [validationLoading, setValidationLoading] = useState(false)

    const [userData, setUserData] = useState({});
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [err, setError] = useState("");
    const [user, loading, error] = useAuthState(auth);
    let navigate = useNavigate('');

    const register = () => {
        setError('');
        if (!name){
            setError("Please Enter Your Name");
        } else if(!email){
            setError("Please Enter a Valid Email Address");
        } else if(!password){
            setError("Please Enter a Password");
        } else if( !(password === confirmPassword)){
            setError("Passwords do not Match");
        }  else {
            signUp(name, email, password, userData);
        }
    };

    const validateDetails = () => {
        setError('');
        if(!matric){
            setError("Please Enter Matric Number")
        } else if(!graduationYear){
            setError("Please Enter Graduation Year")
        } else {
            let access_token = '';
            setValidationLoading(true);
            // make api call to generate auth token
            

            axios.post('https://api.fpo.edu.ng/token', 'grant_type=password&username=fedpoffa&password=2!3$yhSku8^uBn')
            .then(function (response) {
                setValidationLoading(false);
                access_token = response.data.access_token; 
                console.log(response);
                
                // after generating auth token use it to request for user details with matric number and gradustion year 
                axios.get(`https://api.fpo.edu.ng/api/data/finalresult?MatricNo=${matric}&year=${graduationYear}`, 
                {
                    headers: { 
                        'Authorization': `Bearer ${access_token}`,
                    }
                }).then(function (response) {
                    setValidationLoading(false);
                    console.log('final res', response.data);
                    if(!response.data?.status){
                        setError('User Not Found. Please Enter Valid Details');
                    } else {
                        setUserData(response.data.data)
                        setValidated(true);
                        setName(response.data.data.fullname)
                    }
                    
                }).catch(function (error) {
                    console.log(error);
                    setValidationLoading(false);
                    setError('An Error Occured.')
                  })
              })
              .catch(function (error) {
                console.log(error);
                setValidationLoading(false);
                setError('An Error Occured.')
              });


        }
    }

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
                            <Form.Control type="text" value={matric} onChange={(e) => setMatric(e.target.value)} placeholder="Enter Matric Number" />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Control type="number" value={graduationYear} onChange={(e) => setGraduationYear(e.target.value)} placeholder="Enter Graduation Year" />
                        </Form.Group>
                        {validated && 
                        
                            <>
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
                            </>
                        }
                        
                    </Form>
                    {!validated && <Button className="mt-3" variant={'success'} onClick={() => validateDetails()}>{validationLoading? 'Loading...' : 'Validate Details'}</Button>}
                    {validated && <Button className="mt-3" variant={'success'} onClick={() => register()}>{loading? 'Loading...' : 'Create Account'}</Button>}
                    <Button className="mt-3" variant={'danger'} onClick={() => navigate('/login')}> Sign in Instead</Button>
                </div>
            </AuthLayout>
        </MainLayout>
    )
}