import * as React from "react";
import { getOverrideProps } from "../ui-components/utils";
import {
    Alert,
    Button,
    Flex,
    Heading,
    PasswordField,
    TextField,
  } from "@aws-amplify/ui-react";


// tmp
import {SipTabForgetPassword } from "../ui-components";

const BtnChangeCompSgnOrCrateAccount = (p) =>{
    console.log(p.children);
/*
    if (p.children == "CAcountBtn"){
        return(
            overrides={
                {
                    "SipTabCreateAccount":{
                        display:block
                    }
                },
                {
                    "SipTabSignIn":{
                        display:none
                    }
                }
            }
        )
    }
*/
};

export function STLoginViews(props) {
  const { overrides, ...rest } = props;
  
  return (
    <Flex
        direction="column"
        width="50vw"
        height="100vh"
        gap="0rem"
        justifyContent="center"
        alignItems="center"
        paddingTop="20px"
    >
{/* ログイン　アカウント作成表示切り替えバー */}
        <Flex
            gap="10px"
            direction="row"
            width="unset"
            height="100px"
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
                onClick={() => BtnChangeCompSgnOrCrateAccount(props)} 
            ></Button>
            <Button
                width="150px"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="CreateAcount"
                {...getOverrideProps(overrides, "CAcountBtn")}
                onClick={() => BtnChangeCompSgnOrCrateAccount(props)} 
            ></Button>
        </Flex>

    </Flex>





    
  );
}
