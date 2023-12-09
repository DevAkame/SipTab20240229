import * as React from "react";
import { useAuth } from "@aws-amplify/ui-react/internal";
import { getOverrideProps, useAuthSignOutAction } from "./../ui-components/utils";
import {Flex, SelectField,Text} from "@aws-amplify/ui-react"


export function MainHeader(props) {
    const { overrides, ...rest } = props;
    const authAttributes = useAuth().user?.attributes ?? {};
    const buttonOnClick = useAuthSignOutAction({ global: false });
    
    return (
        <Flex direction="column">
            <img src={`${process.env.PUBLIC_URL}/img/siptabIcon.png`} alt="SipTabLogo" />
            <SelectField options={["All","Cherish Premium"]}></SelectField>
            <Text
            fontFamily="Inter"
            fontSize="16px"
            fontWeight="400"
            color="rgba(48,64,80,1)"
            lineHeight="24px"
            textAlign="right"
            display="block"
            direction="column"
            justifyContent="unset"
            width="165px"
            height="unset"
            gap="unset"
            alignItems="unset"
            shrink="0"
            alignSelf="stretch"
            position="relative"
            padding="0px 0px 0px 0px"
            whiteSpace="pre-wrap"
            children={authAttributes["name"]}
            {...getOverrideProps(overrides, "label")}
          ></Text>

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
