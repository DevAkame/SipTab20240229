/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import IconPool32 from "./IconPool32";
import { Divider, Flex } from "@aws-amplify/ui-react";
import IconSetting128 from "./IconSetting128";
export default function NavMainSideBar(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="100px"
      direction="column"
      width="79px"
      height="118px"
      justifyContent="space-between"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "NavMainSideBar")}
      {...rest}
    >
      <IconPool32
        width="32px"
        height="28.44px"
        display="block"
        gap="unset"
        alignItems="unset"
        justifyContent="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "IconPool32")}
      ></IconPool32>
      <Flex
        gap="16px"
        direction="column"
        width="79px"
        height="71px"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 455")}
      >
        <Divider
          width="unset"
          shrink="0"
          alignSelf="stretch"
          size="default"
          orientation="horizontal"
          {...getOverrideProps(overrides, "Divider")}
        ></Divider>
        <IconSetting128
          width="32px"
          height="32px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "IconSetting32")}
        ></IconSetting128>
      </Flex>
    </Flex>
  );
}
