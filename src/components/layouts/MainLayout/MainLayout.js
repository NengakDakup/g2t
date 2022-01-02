import React from "react";
import Container from "react-bootstrap/Container";
import './MainLayout.scss';

export default function MainLayout({fullHeight, style, children}){
    return (
        <Container fluid className={['main_layout', fullHeight? 'fixed_height--100':'']} style={style}>
            {children}
        </Container>
    )
}