/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Flex, Heading } from "@aws-amplify/ui-react";
export default function NavBarHeaderPools(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="0"
      direction="row"
      width="unset"
      height="55px"
      justifyContent="flex-start"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavBarHeaderPools")}
      {...rest}
    >
      <Heading
        width="130px"
        height="32px"
        shrink="0"
        level="1"
        children="Dashboard"
        {...getOverrideProps(overrides, "Heading39232799")}
      ></Heading>
      <Heading
        width="132px"
        height="32px"
        shrink="0"
        level="1"
        children="Pools"
        {...getOverrideProps(overrides, "Heading39232825")}
      ></Heading>
      <Heading
        width="130px"
        height="32px"
        shrink="0"
        level="1"
        children="Manage"
        {...getOverrideProps(overrides, "Heading39232827")}
      ></Heading>
      <Heading
        width="132px"
        height="32px"
        shrink="0"
        level="1"
        children="Logs"
        {...getOverrideProps(overrides, "Heading39232831")}
      ></Heading>
      <Heading
        width="130px"
        height="32px"
        shrink="0"
        level="1"
        children="Setting"
        {...getOverrideProps(overrides, "Heading39232829")}
      ></Heading>
    </Flex>
  );
}
