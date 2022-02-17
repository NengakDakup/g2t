import react from 'react';
import {Link} from 'react-router-dom';
import Card from '../../components/card/Card';
import GeoChart from '../../components/chart/geechart';
import { LineChart } from '../../components/chart/linechart';
import { BarChart } from '../../components/chart/barchart';
import Header from '../../components/header/Header';
import DashboardLayout from '../../components/layouts/DashboardLayout/DashboardLayout';
import MainLayout from '../../components/layouts/MainLayout/MainLayout';
import { PieChart } from '../../components/chart/piechart';
import { DoughnutChart } from '../../components/chart/doughnutchart';
import { PolarChart } from '../../components/chart/polarchart';

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
                <Card>
                    <p>Proportion of Graduate Without Job After Six Months</p>
                    <PieChart />
                </Card>
                <Card>
                    <p>Jobless Graduate Diploma by Gender</p>
                    <DoughnutChart />
                </Card>
                <Card>
                    <p>Graduates Pursuing Higher Degree</p>
                    <PolarChart />
                </Card>
                
            </DashboardLayout>
        </MainLayout>
    )
}