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

const BtnChangeCompSgnOrCrateAccount = (e) =>{
    console.log(e);
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
        paddingTop="50px"
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
{/* ログイン　*/}
        <Flex
            gap="35px"
            direction="column"
            width="401px"
            height="426px"
            justifyContent="flex-start"
            alignItems="center"
            overflow="hidden"
            position="relative"
            padding="10px 8px 10px 8px"
            backgroundColor="rgba(255,255,255,1)"
            {...getOverrideProps(overrides, "SipTabSignIn")}
            {...rest}
        >
            <Alert
                width="unset"
                height="unset"
                heading="Error"
                shrink="0"
                alignSelf="stretch"
                variation="error"
                isDismissible={false}
                hasIcon={true}
                display="none"
                children="Miss Match Address & Password. Please Try agin."
                {...getOverrideProps(overrides, "Alert")}

            ></Alert>
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
                {...getOverrideProps(overrides, "TextField")}
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
                {...getOverrideProps(overrides, "PasswordField")}
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
                {...getOverrideProps(overrides, "Button")}
            ></Button>
            <Heading
                width="unset"
                height="unset"
                shrink="0"
                level="6"
                children="Forget Password"
                {...getOverrideProps(overrides, "Heading")}
            ></Heading>
        </Flex>
{/* アカウント新規作成画面 */}
        <Flex
            display="none"
            gap="19px"
            direction="column"
            width="401px"
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
        <Alert
            width="unset"
            height="unset"
            heading="Error"
            shrink="0"
            alignSelf="stretch"
            variation="error"
            isDismissible={false}
            hasIcon={true}
            children="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore."
            {...getOverrideProps(overrides, "Alert")}
        ></Alert>
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
            {...getOverrideProps(overrides, "EmailField")}
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
            {...getOverrideProps(overrides, "NameField")}
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
            {...getOverrideProps(overrides, "PasswordField")}
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
            {...getOverrideProps(overrides, "ConfirmPasswordField")}
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
            {...getOverrideProps(overrides, "ConfirmBtn")}
        ></Button>
    </Flex>
        <SipTabForgetPassword
            width="400px"
            display="none"
        />

    </Flex>





    
  );
}
