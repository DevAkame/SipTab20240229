import { useState } from "react";
import React from "react";
import { SelectField,Flex } from "@aws-amplify/ui-react";


export function MainHeader() {



    return (
        <Flex direction="column">
            <div className="lefty">
                <img src={`${process.env.PUBLIC_URL}/img/siptabIcon.png`} alt="SipTabLogo" />
                <SelectField options={['all','test01','Chelish Cutting Dyning Girls Bar']}></SelectField>
            </div>
            <div className="righty">
                <h2>Akame</h2>
                <h2>test</h2>
                <button loadingText="" onClick={() => alert('hellow')}>Sign Out</button>
            </div>
        </Flex>
    )
}
