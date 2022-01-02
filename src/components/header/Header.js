import React from "react";
import {Button} from 'react-bootstrap';
import {FaPowerOff} from 'react-icons/fa';

import './Header.scss';

export default function Header(){
    return (
        <nav className="header">
            <h1>G2T</h1>
            <Button>Logout <FaPowerOff /> </Button>
        </nav>
    )
}