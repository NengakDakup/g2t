import React from "react";
import Container from "react-bootstrap/Container";
import './MainLayout.scss';

export default function MainLayout({fullHeight, children}){
    return (
        <Container fluid className={['main_layout', fullHeight? 'fixed_height--100':'']} >
            {children}
        </Container>
    )
}