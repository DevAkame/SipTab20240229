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
            direction="row"
            gap="10px"
            width="100%"
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
                width="50%"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="SIBtn"
                {...getOverrideProps(overrides, "SIBtn")}
                onClick={() => BtnChangeCompSgnOrCrateAccount(props)} 
            ></Button>
            <Button
                width="50%"
                height="unset"
                shrink="0"
                size="small"
                isDisabled={false}
                variation="link"
                children="CAcountBtn"
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
