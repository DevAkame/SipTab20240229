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



export function STLoginViews(props) {
  const { overrides, ...rest } = props;
  
    const BtnChangeCompSgnOrCrateAccount = (e) =>{
        console.log(e);
        const BtmSignIn =  document.getElementById("ActivateSginIn");
        const BtmCreateAcunt = document.getElementById("ActivateCreateAccount");
        const ViewSignIn = document.getElementById("SignInView");
        const ViewCreateAcunt = document.getElementById("CreateAcountView");
        if(e.currentTarget.id === "ActivateCreateAccount"){
            BtmSignIn.style.backgroundColor = "rgba(255,255,255,1)";
            BtmCreateAcunt.style.backgroundColor = "rgba(178,34,34,1)";
            BtmSignIn.style.isDisabled = false;
            BtmCreateAcunt.style.isDisabled = true;

            ViewSignIn.style.display = "none";
            ViewCreateAcunt.style.display = "block";

        };
    
    };



  return (
    <Flex
        direction="column"
        width="50vw"
        height="100vh"
        gap="0rem"
        justifyContent="flex-start"
        alignItems="center"
        paddingTop="10px"
    >
{/* ログイン　アカウント作成表示切り替えバー */}
        <Flex
            direction="row"
            gap="10px"
            width="500px"
            height="50px"
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
                id="ActivateSginIn"
                width="50%"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={true}
                variation="link"
                children="SignIn"
                backgroundColor="rgba(178,34,34,1)"
                {...getOverrideProps(overrides, "SIBtn")}
                onClick={BtnChangeCompSgnOrCrateAccount} 
            ></Button>
            <Button
                id="ActivateCreateAccount"
                width="50%"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="CreateAcount"
                backgroundColor="rgba(255,255,255,1)"
                {...getOverrideProps(overrides, "CAcountBtn")}
                onClick={BtnChangeCompSgnOrCrateAccount} 
            ></Button>
        </Flex>
{/* ログイン　*/}
        <Flex
            id="SignInView"
            gap="35px"
            direction="column"
            width="500px"
            height="426px"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            position="relative"
            padding="10px 8px 10px 8px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "SipTabSignIns")}
            {...rest}
        >
            <TextField
                width="300px"
                height="unset"
                label="Email"
                shrink="0"
                placeholder="Mail Address"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "SignInMail")}
            ></TextField>
            <PasswordField
                width="300px"
                height="unset"
                label="Password"
                shrink="0"
                placeholder="password"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                hideShowPassword={false}
                {...getOverrideProps(overrides, "SignInPasswd")}
            ></PasswordField>
            <Button
                width="300px"
                height="unset"
                padding="3px 0px 3px 0px"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="primary"
                children="Confirm"
                {...getOverrideProps(overrides, "SignInSubmitBtn")}
            ></Button>
        </Flex>
{/* アカウント新規作成画面 */}
        <Flex
            id="CreateAcountView"
            display="none"
            gap="19px"
            direction="column"
            width="500px"
            height="unset"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            position="relative"
            padding="31px 47px 31px 47px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "SipTabCreateAccount")}
            {...rest}
        >
            <TextField
                width="300px"
                height="unset"
                label="Email"
                shrink="0"
                placeholder="Placeholder"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "CreateAccountEmailField")}
            ></TextField>
            <TextField
                width="300px"
                height="unset"
                label="Name"
                shrink="0"
                placeholder="Placeholder"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                {...getOverrideProps(overrides, "CreateAccountNameField")}
            ></TextField>
            <PasswordField
                width="300px"
                height="unset"
                label="Password"
                shrink="0"
                placeholder="Placeholder"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                hideShowPassword={false}
                {...getOverrideProps(overrides, "CreateAccountPasswordField")}
            ></PasswordField>
            <PasswordField
                width="300px"
                height="unset"
                label="Confirm Password"
                shrink="0"
                placeholder="Placeholder"
                size="small"
                isDisabled={false}
                labelHidden={false}
                variation="default"
                hideShowPassword={false}
                {...getOverrideProps(overrides, "CreateAccountConfirmPasswordField")}
            ></PasswordField>
            <Button
                width="unset"
                height="unset"
                padding="3px 0px 3px 0px"
                shrink="0"
                alignSelf="stretch"
                size="default"
                isDisabled={false}
                variation="primary"
                children="Confirm"
                {...getOverrideProps(overrides, "CreateAccountConfirmBtn")}
            ></Button>
        </Flex>
    </Flex>
  );
}
