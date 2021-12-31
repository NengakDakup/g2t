import React from "react";
import Button from 'react-bootstrap/Button';
import './Button.scss'

export default function CustomButton({title, variant}){
    return (
        <Button variant={variant}>{title}</Button>
    )
}