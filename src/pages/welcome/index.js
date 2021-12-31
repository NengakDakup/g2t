import React, { Component } from "react";
import {Row, Col} from "react-bootstrap"
import MainLayout from "../../components/layouts/MainLayout";
import CustomButton from "../../components/Button/Button";

export default function Welcome () {
    return (
        <MainLayout fixedHeight>
            <Row>
                <Col>
                    <h2>Welcomeeee</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                </Col>
            </Row>
            
            <CustomButton title={'Welcome'} variant={'danger'}/>
        </MainLayout>
    )
}