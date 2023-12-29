/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import Component1 from "./Component1";
import { Flex } from "@aws-amplify/ui-react";
export default function SipTabForgetPassword(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="17px"
      direction="column"
      width="400px"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="11px 8px 11px 8px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SipTabForgetPassword")}
      {...rest}
    >
      <Component1
        width="384px"
        height="234px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Component 1")}
      ></Component1>
    </Flex>
  );
}
