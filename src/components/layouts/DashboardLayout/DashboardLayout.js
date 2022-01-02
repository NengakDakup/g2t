import React from "react";
import Container from "react-bootstrap/Container";
import './DashboardLayout.scss';

export default function DashboardLayout({children}){
    return (
        <Container fluid className='dashboard_layout'>
            {children}
        </Container>
    )
}