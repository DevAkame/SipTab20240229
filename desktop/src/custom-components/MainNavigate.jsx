import * as React from "react";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { getOverrideProps, useAuthSignOutAction } from "./utils";
import {Flex, SelectField} from "@aws-amplify/ui-react"


export function MainHeader(props) {
    const { overrides, ...rest } = props;
    const authAttributes = useAuth().user?.attributes ?? {};
    const buttonOnClick = useAuthSignOutAction({ global: false });
    
    return (
        <Flex direction="column">
            <img src={`${process.env.PUBLIC_URL}/img/siptabIcon.png`} alt="SipTabLogo" />
            <SelectField options={["All","Cherish Premium"]}></SelectField>
            <h2>{props.name}</h2>
            <button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="destructive"
            children="Sign Out"
            onClick={() => {
              buttonOnClick()}}
              {...getOverrideProps(overrides, "Button")}></button>
        </Flex>
    )
}
