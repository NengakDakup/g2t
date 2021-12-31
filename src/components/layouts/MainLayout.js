import React from "react";
import Container from "react-bootstrap/Container";
import './MainLayout.scss';

export default function MainLayout({children}){
    return (
        <Container fluid>
            {children}
        </Container>
    )
}