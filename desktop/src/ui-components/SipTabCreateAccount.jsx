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
  PasswordField,
  TextField,
} from "@aws-amplify/ui-react";
export default function SipTabCreateAccount(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
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
  );
}
