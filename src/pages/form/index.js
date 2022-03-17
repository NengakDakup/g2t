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

import universities from '../../universities.json';
import polytechnics from '../../polytechnics.json';
import colleges from '../../colleges.json'

const salaryRange = (min, max, interval) => {
    let arr = [];
    for(let i = min; i < max; i+=interval){
        let txt = `${i},000 - ${i+interval},000`; 
        console.log(txt)
        arr.push(txt)
        
    }
    return arr;
}




export default function FormPage() {
    let navigate = useNavigate('');
    let [activeTab, setActiveTab] = useState(1)
    const [user, loading, error] = useAuthState(auth);
    let [profileData, setProfileData] = useState([
        {
            title: 'Title',
            type: 'select',
            value: '',
            options: ['Mr', 'Mrs', 'Ms', 'Dr', 'Prof', 'Chief']
        },
        {
            title: 'Surname',
            type: 'text',
            value: ''
        },
        {
            title: 'First Name',
            type: 'text',
            value: ''
        },
        {
            title: 'Last Name',
            type: 'text',
            value: ''
        },
        {
            title: 'Gender',
            type: 'select',
            value: '',
            options: ['Male', 'Female']
        },
        {
            title: 'Date Of Birth',
            type: 'date',
            value: ''
        },
        {
            title: 'Marital Status',
            type: 'select',
            value: 'Married',
            options: ['Married', 'Single', 'Divorced', 'Widow/Widower']
        },
        {
            title: 'Date Of Marriage',
            type: 'date',
            value: '',
            requiredTitle: 'Marital Status',
            requiredValue: 'Married'
        },
        {
            title: 'Date Of Divorce',
            type: 'date',
            value: '',
            requiredTitle: 'Marital Status',
            requiredValue: 'Divorced'
        },
        {
            title: 'Date Of Widow/Widower',
            type: 'date',
            value: '',
            requiredTitle: 'Marital Status',
            requiredValue: 'Widow/Widower'
        },
        {
            title: 'Number of Children',
            type: 'number',
            value: ''
        },
        {
            title: 'Number of Dependents',
            type: 'number',
            value: ''
        },
        {
            title: 'Physical Address',
            type: 'text',
            value: ''
        },
        {
            title: 'Office Address',
            type: 'text',
            value: ''
        },
        {
            title: 'Do You Have Any Disability?',
            type: 'select',
            value: '',
            options: ['Yes', 'No']
        },
        {
            title: 'If Yes Specify',
            type: 'text',
            value: '',
            requiredTitle: 'Do You Have Any Disability?',
            requiredValue: 'Yes'
        },
        {
            title: 'When Did it Occur?',
            type: 'select',
            value: '',
            options: ['Before Graduation', 'After Graduation'],
            requiredTitle: 'Do You Have Any Disability?',
            requiredValue: 'Yes'
        },
        {
            title: 'Contact [Mobile Phone Number]',
            type: 'number',
            value: ''
        },
        {
            title: 'Institution Attended',
            type: 'select',
            value: '',
            options: ['University', 'Polytechnic', 'College Of Education']
        },
        {
            title: 'University Attended',
            type: 'select',
            value: '',
            options: universities.map(item => item.name),
            requiredTitle: 'Institution Attended',
            requiredValue: 'University'
        },
        {
            title: 'Polytechnic Attended',
            type: 'select',
            value: '',
            options: polytechnics.map(item => item),
            requiredTitle: 'Institution Attended',
            requiredValue: 'Polytechnic'
        },
        {
            title: 'College Attended',
            type: 'select',
            value: '',
            options: colleges.map(item => item.name),
            requiredTitle: 'Institution Attended',
            requiredValue: 'College Of Education'
        },
        {
            title: 'Year Of Entry',
            type: 'date',
            value: ''
        },
        {
            title: 'Entry Mode',
            type: 'select',
            value: '',
            options: ['Sandwich', 'Part Time', 'Full Time']
        },
        {
            title: 'Matriculation Number',
            type: 'text',
            value: ''
        },
        {
            title: 'Faculty / School',
            type: 'text',
            value: ''
        },
        {
            title: 'Department',
            type: 'text',
            value: ''
        },
        {
            title: 'Course of Study',
            type: 'text',
            value: ''
        },
        {
            title: 'Year Of Graduation',
            type: 'date',
            value: ''
        },
        {
            title: 'Class Of Degree',
            type: 'select',
            value: '',
            options: [
                'First Class',
                'Second Class Upper',
                'Second Class Lower',
                'Third class',
                'Pass',
                'Distinction',
                'Upper Credit',
                'Lower Credit',
                'Credit',
                'Merit'
            ]
        },
        {
            title: 'Awards',
            type: 'text',
            value: ''
        },
        
        
        
        
    ]);
    let [qualificationData, setQualificationData] = useState([
        {
            title: 'First Qualification',
            type: 'select',
            value: '',
            options: ['NCE', 'ND', 'HND', 'BSC / BED / BTECH']
        },
        {
            title: 'New Qualification',
            type: 'select',
            value: '',
            options: ['NCE', 'ND', 'HND', 'BSC / BED / BTECH', 'PGD / PGDE', 'MSC / MBA', 'PHD']
        },
        {
            title: 'Highest Qualification',
            type: 'select',
            value: '',
            options: ['NCE', 'ND', 'HND', 'BSC / BED / BTECH', 'PGD / PGDE', 'MSC / MBA', 'PHD']
        },
        {
            title: 'Courses Attended After First Graduation',
            type: 'text',
            value: '',
        },
        {
            title: 'Special Skills Acquired Before Graduation',
            type: 'text',
            value: '',
        },
        {
            title: 'Special Skills Acquired After Graduation',
            type: 'text',
            value: '',
        }
    ]);
    let [employmentData, setEmploymentData] = useState([
        {
            title: 'Are You Employed',
            type: 'select',
            value: '',
            options: ['Yes', 'No']
        },
        {
            title: 'Type Of Employment',
            type: 'select',
            value: '',
            options: ['Public', 'Private', 'NGO', 'Self Employed'],
            
        },
        {
            title: 'Name of Organisation',
            type: 'text',
            value: ''
        },
        {
            title: 'Position',
            type: 'text',
            value: ''
        },
        {
            title: 'Job Title',
            type: 'text',
            value: ''
        },
        {
            title: 'Job Description',
            type: 'text',
            value: ''
        },
        
        {
            title: 'Date Of Employment',
            type: 'date',
            value: ''
        },
        
        {
            title: 'Grade Level / Scale',
            type: 'number',
            value: ''
        },
        {
            title: 'Basic Salary',
            type: 'select',
            value: '',
            options: salaryRange(1, 400, 19)
        },
        {
            title: 'Monthly Salary',
            type: 'select',
            value: '',
            options: salaryRange(1, 500, 19)
        },
        {
            title: 'Annual Salary',
            type: 'select',
            value: '',
            options: ['Below 100,000', '101,000 - 500,000', '501,000 - 1,000,000', 'Above 1,000,000']
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