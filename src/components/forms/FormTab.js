import React, {useState} from "react";
import { Row, Col, Container, Nav, Badge } from "react-bootstrap";

import './FormTab.scss';

export default function FormTab({activeTab}){

    return (
        <div className="form_tabs">
            <div className={activeTab > 0 ? 'form_tabs_item active' : 'form_tabs_item'}>
                <span className={activeTab > 0 ? 'form_tabs_item_label active' : 'form_tabs_item_label'}>Profile</span>
                <div className={activeTab > 0 ? 'form_tabs_item_number item_1 active' : 'form_tabs_item_number item_1'}>1</div>
            </div>
            <div className={activeTab > 1 ? 'form_tabs_item active' : 'form_tabs_item'}>
                <span className={activeTab > 1 ? 'form_tabs_item_label item_2 active' : 'form_tabs_item_label item_2'}>Qualification</span>
                <div className={activeTab > 1 ? 'form_tabs_item_number item_2 active' : 'form_tabs_item_number item_2'}>2</div>
            </div>
            <div className={activeTab > 2 ? 'form_tabs_item active' : 'form_tabs_item'}>
            <span className={activeTab > 2 ? 'form_tabs_item_label item_3 active' : 'form_tabs_item_label item_3'}>Employment</span>
                <div className={activeTab > 2 ? 'form_tabs_item_number item_3 active' : 'form_tabs_item_number item_3'}>3</div>
            </div>
        </div>
    )
}