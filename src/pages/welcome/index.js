import React, { Component } from "react";

import CustomButton from "../../components/Button/Button";

export default function Welcome () {
    return (
        <div>
            <h2>Welcomeeee</h2>
            <CustomButton title={'Welcome'} variant={'danger'}/>
        </div>
    )
}