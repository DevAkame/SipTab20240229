import * as React from "react";
import { getOverrideProps } from "../ui-components/utils";
import { Button, Flex } from "@aws-amplify/ui-react";

export function btnhandlers(e){
    console.log(e);
};

export function STLoginViews(props) {
  const { overrides, ...rest } = props;
  
  return (
    <Flex
        direction="column"
        width="50vw"
        height="100%"
        gap="0rem"
        justifyContent="center"
        alignItems="center"
        paddingTop="100px"
        >
            <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="unset"
            justifyContent="flex-start"
            alignItems="flex-start"
            overflow="hidden"
            position="relative"
            padding="10px 10px 10px 10px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "STSignInOrCreateAcountChangeBar")}
            {...rest}
            >
                <Button
                    width="150px"
                    height="unset"
                    shrink="0"
                    size="small"
                    isDisabled={false}
                    variation="link"
                    children="SingIn"
                    {...getOverrideProps(overrides, "SIBtn")}
                    onClick={() => btnhandlers(props)} 
                >
                </Button>
                <Button
                  width="150px"
                  height="unset"
                  shrink="0"
                  size="small"
                  isDisabled={false}
                  variation="link"
                  children="CreateAcount"
                  {...getOverrideProps(overrides, "CAcountBtn")}
                ></Button>
            </Flex>

            <SipTabSignIn 
                width="400px"
            />
            <SipTabCreateAccount
                width="400px"
                display="none"
            />
            <SipTabForgetPassword
                width="400px"
                display="none"
            />

    </Flex>





    
  );
}
