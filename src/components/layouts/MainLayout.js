import React from "react";
import Container from "react-bootstrap/Container";
import './MainLayout.scss';

export default function MainLayout({fixedHeight, children}){
    return (
        <Container fluid className={['main_layout', fixedHeight? 'fixed_height--100':'']} >
            {children}
        </Container>
    )
}