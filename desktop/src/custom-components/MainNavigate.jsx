import { useState } from "react";
import React from "react";


export function MainHeader() {
    const imgStyle = {
        width: 20px;
        height:20px;
    }


    return (
        <>
            <img src={`${process.env.PUBLIC_URL}/img/siptabIcon.png`} alt="SipTabLogo" style={imgStyle}/>
        </>
    )
}
