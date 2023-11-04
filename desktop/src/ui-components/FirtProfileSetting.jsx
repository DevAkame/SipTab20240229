/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
export default function FirtProfileSetting(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="39px"
      direction="column"
      width="unset"
      height="unset"
      justifyContent="center"
      alignItems="flex-start"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "FirtProfileSetting")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        shrink="0"
        level="3"
        children="アカウント情報設定"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <View
        width="254px"
        height="24px"
        {...getOverrideProps(overrides, "label")}
      ></View>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "Name")}
      ></Flex>
      <Flex
        gap="16px"
        direction="row"
        width="739px"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 462")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "MailAddress")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "PhoneNum")}
        ></Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 456")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "UserID40356025")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "UserID40356026")}
        ></Flex>
      </Flex>
      <Flex
        gap="16px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 460")}
      >
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "UserID40356027")}
        ></Flex>
        <Flex
          width="unset"
          height="unset"
          {...getOverrideProps(overrides, "UserID40356028")}
        ></Flex>
      </Flex>
      <Flex
        width="498px"
        height="unset"
        {...getOverrideProps(overrides, "SelectBirthdays")}
      ></Flex>
      <Flex
        width="300px"
        height="unset"
        {...getOverrideProps(overrides, "selectJender")}
      ></Flex>
      <Flex
        width="unset"
        height="unset"
        {...getOverrideProps(overrides, "PostNum")}
      ></Flex>
      <Flex
        width="300px"
        height="unset"
        {...getOverrideProps(overrides, "SelectJobType")}
      ></Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="default"
        isDisabled={false}
        variation="primary"
        children="Commit"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
