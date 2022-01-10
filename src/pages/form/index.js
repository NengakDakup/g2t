import React, { useState, useEffect } from "react";
import {Link, useNavigate} from 'react-router-dom'
import { useAuthState } from "react-firebase-hooks/auth";
import { Container, Row, Col, Button, Form } from "react-bootstrap"
import {FaArrowRight, FaArrowLeft} from 'react-icons/fa';
import {auth, updateProfileData} from '../../firebase'

import MainLayout from "../../components/layouts/MainLayout/MainLayout";
import DashboardLayout from "../../components/layouts/DashboardLayout/DashboardLayout";
import Header from "../../components/header/Header";
import Card from "../../components/card/Card"
import FormTab from "../../components/forms/FormTab";
import ProfileForm from "../../components/forms/ProfileForm";
import QualificationForm from "../../components/forms/QualificationForm";
import EmploymentForm from "../../components/forms/EmploymentForm";

export default function FormPage() {
    let navigate = useNavigate('');
    let [activeTab, setActiveTab] = useState(1)
    const [user, loading, error] = useAuthState(auth);
    let [profileData, setProfileData] = useState([
        {
            title: 'Matriculation Number',
            type: 'text',
            value: ''
        },
        {
            title: 'Entry Year',
            type: 'number',
            value: ''
        },
        {
            title: 'Entry Mode',
            type: 'text',
            value: ''
        },
        {
            title: 'Course of Study',
            type: 'text',
            value: ''
        },
        {
            title: 'Graduation Year',
            type: 'number',
            value: ''
        },
        {
            title: 'Class Of Degree',
            type: 'text',
            value: '',
            options: [
                'First Class',
                'Second Class Upper',
                'Second Class Lower',
                'Third class',
                'Good Academic Standing'
            ]
        },
        {
            title: 'Special Skill',
            type: 'text',
            value: ''
        },
        {
            title: 'Awards',
            type: 'text',
            value: ''
        },
        {
            title: 'Marital Status',
            type: 'text',
            value: ''
        },
        {
            title: 'Date Of Birth',
            type: 'text',
            value: ''
        },
        {
            title: 'Date of Marriage',
            type: 'text',
            value: ''
        },
        {
            title: 'Number of Children',
            type: 'text',
            value: ''
        },
        {
            title: 'Number of Dependents',
            type: 'text',
            value: ''
        },
        {
            title: 'Physical Address',
            type: 'text',
            value: ''
        },
        {
            title: 'Contact',
            type: 'text',
            value: ''
        },
    ]);
    let [qualificationData, setQualificationData] = useState([
        {
            title: 'Post Graduate Qualification',
            type: 'text',
            value: ''
        },
        {
            title: 'Courses After Graduation',
            type: 'text',
            value: ''
        },
    ]);
    let [employmentData, setEmploymentData] = useState([
        {
            title: 'Job Title',
            type: 'text',
            value: ''
        },
        {
            title: 'Job Content',
            type: 'text',
            value: ''
        },
        {
            title: 'Appoinment Date',
            type: 'text',
            value: ''
        },
        {
            title: 'Position',
            type: 'text',
            value: ''
        },
        {
            title: 'Salary Scale',
            type: 'number',
            value: ''
        },
        {
            title: 'Hours Worked Per Day',
            type: 'text',
            value: ''
        },
        {
            title: 'Job Assessment',
            type: 'text',
            value: ''
        },
    ]);

    useEffect(() => {
        if (activeTab === 4) {
            updateProfileData(user.uid, profileData, qualificationData, employmentData);
        }
    }, [activeTab]);

    let renderTabs = () => {
        if(activeTab === 1){
            return <ProfileForm setData={setProfileData} data={profileData} />
        } else if (activeTab === 2){
            return <QualificationForm setData={setQualificationData} data={qualificationData} />
        } else if(activeTab === 3){
            return <EmploymentForm setData={setEmploymentData} data={employmentData} />
        } else {
            return <>
            <h1>Your Data has been saved</h1>
            <p>Kindly Visit us frequently to keep your profile up to date</p>
            </>
        }
    }

    const validateEntries = () => {
        return false;
    }

    let navigateTabs = (direction) => {
        if(direction === 'back') {
            if(activeTab === 1)  return 0;
            setActiveTab(activeTab-1);
        } else {
            setActiveTab(activeTab+1);
        }

    }


    return (
        <MainLayout style={{paddingTop: 60}}>
            <Header />
            <DashboardLayout>
                <Card>
                    <p><strong>Please Fill All Fields Appopriately</strong> 🌋</p>
                    <FormTab activeTab={activeTab} />
                </Card>
                <Card>
                    
                    {renderTabs() }
                    <div className="form_navigation">
                        {activeTab === 4? 
                            <Button onClick={() => navigate("/dashboard")} variant="success" className="mt-3">Go Back Home</Button>
                            :
                            <>
                            <Button onClick={() => navigateTabs("back")} variant="danger" className="mt-3" disabled={activeTab === 1? true : false}>
                                <FaArrowLeft style={{marginRight: 5}}/>
                                    Previous
                                </Button>
                                <Button onClick={() => navigateTabs("front")} variant="success" className="mt-3">
                                    {activeTab === 3? "Save Details" : "Next"}
                                    <FaArrowRight style={{marginLeft: 5}} />
                            </Button>
                            </>
                        }
                        
                    </div>
                </Card>
            
            </DashboardLayout>
            
        </MainLayout>
    )
}