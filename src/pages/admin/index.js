import react from 'react';
import {Link} from 'react-router-dom';
import Card from '../../components/card/Card';
import GeoChart from '../../components/chart/geechart';
import { LineChart } from '../../components/chart/linechart';
import Header from '../../components/header/Header';
import DashboardLayout from '../../components/layouts/DashboardLayout/DashboardLayout';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';

export default function AdminPage(){
    return (
        <MainLayout style={{paddingTop: 60}}>
            <Header />
            <DashboardLayout>
                <Card>
                    <Link to="/records">View All Records</Link>
                </Card>
                <Card>
                    <p>Users Distribution Graph</p>
                    <GeoChart />
                </Card>
                <Card>
                    <p>Users Salary Graph</p>
                    <LineChart />
                </Card>
            </DashboardLayout>
        </MainLayout>
    )
}