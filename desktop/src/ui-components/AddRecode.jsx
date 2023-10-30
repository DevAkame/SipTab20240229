/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export default function AddRecode(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="unset"
      height="82px"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="0px 11px 0px 11px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "AddRecode")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        gap="50px"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Add Recode"
        {...getOverrideProps(overrides, "addItemRecode")}
      ></Button>
      <Button
        width="unset"
        height="unset"
        gap="50px"
        shrink="0"
        size="large"
        isDisabled={false}
        variation="primary"
        {...getOverrideProps(overrides, "importItemData")}
      ></Button>
    </Flex>
  );
}
