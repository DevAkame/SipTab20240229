/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useStateMutationAction } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function SipTabSignInOrCreateAcountChangeBar(props) {
  const { overrides, ...rest } = props;
  const [createAcountBtnDisabled, setCreateAcountBtnDisabled] =
    useStateMutationAction(undefined);
  const signInBtnOnClick = () => {
    setCreateAcountBtnDisabled(false);
  };
  return (
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
      {...getOverrideProps(overrides, "SipTabSignInOrCreateAcountChangeBar")}
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
        onClick={() => {
          signInBtnOnClick();
        }}
        {...getOverrideProps(overrides, "SignInBtn")}
      ></Button>
      <Button
        width="150px"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="CreateAcount"
        disabled={createAcountBtnDisabled}
        {...getOverrideProps(overrides, "CreateAcountBtn")}
      ></Button>
    </Flex>
  );
}
