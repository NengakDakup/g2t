import React from "react";
import {Button} from 'react-bootstrap';
import {FaPowerOff} from 'react-icons/fa';
import {logout} from '../../firebase';
import { useNavigate } from 'react-router-dom';

import './Header.scss';

export default function Header(){
    let navigate = useNavigate('');

    async function signOut(){
        await logout();
        navigate("/login")
    }
    return (
        <nav className="header">
            <h1>G2T</h1>
            <Button onClick={signOut}>Logout <FaPowerOff /> </Button>
        </nav>
    )
}