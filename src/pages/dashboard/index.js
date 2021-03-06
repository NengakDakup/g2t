import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import {FaUserCheck, FaRegEdit, FaFingerprint} from "react-icons/fa";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, fetchUserData, logout } from "../../firebase";

import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import DashboardLayout from "../../components/layouts/DashboardLayout/DashboardLayout";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card"
import ProfileForm from "../../components/forms/ProfileForm";

export default function Dashboard() {
    const [user, loading, error] = useAuthState(auth);
    const [userData, setUserData] = useState();
    let navigate = useNavigate('');

    async function fetchData(uid){
        let res = await fetchUserData(uid);
        console.log('resp', res);
        setUserData(res);
    }

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        fetchData(user.uid);
        
    }, [user, loading]);

    return (
        <MainLayout style={{paddingTop: 60}}>
            <Header />
            {!userData ? 
            <DashboardLayout>
                <Card>
                    <p>Loading...</p>
                </Card>
            </DashboardLayout>
            : 
            <DashboardLayout>
                <Card>
                    <p><strong>Welcome Back {userData.name}</strong>😉</p>
                    <p>Here's How to get Started ⚡</p>
                    <Row>
                        <Col>
                            <Card style={{backgroundColor: '#edffef'}}>
                                <FaUserCheck style={{color: '#85c18b', fontSize: 50,}} />
                                <div style={{color: '#85c18b', marginTop: 10}}>
                                    <p> <strong style={{fontSize: 40}}>1.</strong> Create An Account / Login to Your Account.</p>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: '#fff2ec'}}>
                                <FaRegEdit style={{color: '#b18d7c', fontSize: 50,}} />
                                <div style={{color: '#b18d7c', marginTop: 10}}>
                                    <p> <strong style={{fontSize: 40}}>2.</strong> Create / Update Your Records with us.</p>
                                </div>
                            </Card>
                        </Col>
                        <Col>
                            <Card style={{backgroundColor: '#f4f2ff'}}>
                                <FaFingerprint style={{color: '#857eb3', fontSize: 50,}} />
                                <div style={{color: '#857eb3', marginTop: 10}}>
                                    <p> <strong style={{fontSize: 40}}>3.</strong> Save Your records and make sure to regularly update it.</p>
                                </div>
                            </Card>
                        </Col>
                    </Row>
                </Card>

                <Card>
                    <p><strong>Profile Information</strong> 🔎</p>
                    <span>You can go ahead to edit/update your information then save it</span>
                    <Button onClick={() => navigate("/form")} variant="success" className="mt-3">Edit / Update My Record</Button>
                </Card>
            
            </DashboardLayout>
            }
            
            
        </MainLayout>
    )
}