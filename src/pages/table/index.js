import react, {useEffect, useState} from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, fetchRecords } from "../../firebase";
import { Form, Button } from "react-bootstrap"

import {Table} from 'react-bootstrap';
import {Link, useNavigate} from 'react-router-dom'
import Card from '../../components/card/Card';
import Header from '../../components/header/Header';
import DashboardLayout from '../../components/layouts/DashboardLayout/DashboardLayout';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import Popup from '../../components/modal/modal';



export default function TablePage(){
    let [profiles, setProfiles] = useState([]);
    let [profilesQuery, setProfilesQuery] = useState([]);
    let [query, setQuery] = useState('');
    const [user, loading, error] = useAuthState(auth);
    const [lgShow, setLgShow] = useState(false);
    const [modalData, setModalData] = useState({});
    let navigate = useNavigate('');

    useEffect(() => {
        if (loading) return;
        if (!user) return navigate("/login");
        load();
        if(query.length > 0){
            filterData();
        }
        
    }, [user, loading, query]);

    async function load(){
        let res = await fetchRecords();
        let arr = [];
        res.forEach(item => {
            arr.push(item.data());
        });
        console.log('resssss', arr);
        setProfiles(arr);
        
    }

    function filterData(){
        let res = profiles.filter(item => {
            let bool = item.profile[0].value.toString().toLowerCase().includes(query.toString().toLowerCase());
            return bool;
        });

        setProfilesQuery(res);
    }

    function showRecord(record){
        console.log(record);
        setModalData(record);
        setLgShow(true);
    }

    return (
        <MainLayout style={{paddingTop: 60}}>
            <Popup lgShow={lgShow} setLgShow={setLgShow} data={modalData} />
            <DashboardLayout>
                <Header />
                <Card>
                    <h1>All Records</h1>
                    <Form>
                        <Form.Group className="mb-3">
                            <Form.Control type="text" onChange={(e) => setQuery(e.target.value)} placeholder="Enter Matric Number" />
                            
                        </Form.Group>
                    </Form>
                    {profiles.length < 1? 
                        <p>Loading...</p> :
                        
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                <th>#</th>
                                <th>Matriculation Number</th>
                                <th>Course Of Study</th>
                                <th>Contact</th>
                                </tr>
                            </thead>
                            <tbody>
                                {query.length > 1? 
                                profilesQuery.map((item, i) => {
                                    return <tr key={i} onClick={() => showRecord(item)}>
                                        <td>{++i}</td>
                                        <td>{item.profile[24].value}</td>
                                        <td>{item.profile[27].value}</td>
                                        <td>{item.profile[17].value}</td>
                                    </tr>
                                }) :

                                profiles.map((item, i) => {
                                    return <tr key={i} onClick={() => showRecord(item)}>
                                        <td>{++i}</td>
                                        <td>{item.profile[24].value}</td>
                                        <td>{item.profile[27].value}</td>
                                        <td>{item.profile[17].value}</td>
                                    </tr>
                                })

                            }
                                
                            </tbody>
                        </Table>   
                    }
                </Card>
            </DashboardLayout>
        </MainLayout>
    )
}