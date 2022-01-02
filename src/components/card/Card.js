import React from "react";
import './Card.scss'

export default function Card({style, children}){
    return (
        <div className="card" style={style}>
           {children} 
        </div>
    )
}