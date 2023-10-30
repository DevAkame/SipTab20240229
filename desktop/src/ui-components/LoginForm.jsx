/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, PasswordField, TextField } from "@aws-amplify/ui-react";
export default function LoginForm(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="40px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "LoginForm")}
      {...rest}
    >
      <Flex
        gap="40px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 1")}
      >
        <Flex
          gap="10px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "login_select")}
        >
          <TextField
            width="300px"
            height="unset"
            label="Mail Address"
            shrink="0"
            placeholder="Placeholder"
            size="default"
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
            size="default"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            hideShowPassword={false}
            {...getOverrideProps(overrides, "PasswordField")}
          ></PasswordField>
        </Flex>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="destructive"
          children="Login"
          {...getOverrideProps(overrides, "LoginBtn")}
        ></Button>
      </Flex>
    </Flex>
  );
}
