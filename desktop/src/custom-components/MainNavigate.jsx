import { useState } from "react";
import React from "react";
import {Flex, SelectField} from "@aws-amplify/ui-react"


export function MainHeader(props) {
    
    return (
        <Flex direction="column">
            <img src={`${process.env.PUBLIC_URL}/img/siptabIcon.png`} alt="SipTabLogo" />
            <SelectField options={["All","Cherish Premium"]}></SelectField>
            <h2>{props.name}</h2>
            <button onClick={() => alert('test')}>SignOut</button>
        </Flex>
    )
}
