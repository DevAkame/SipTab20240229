/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Alert,
  Button,
  Flex,
  Heading,
  PasswordField,
  TextField,
} from "@aws-amplify/ui-react";
export default function SipTabSignIn(props) {
  const { overrides, ...rest } = props;
  return (
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
        children="Miss Match Address & Password. Please Try agin."
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
        {...getOverrideProps(overrides, "TextField")}
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
  );
}
