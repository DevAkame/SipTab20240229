/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Heading, View } from "@aws-amplify/ui-react";
export default function DataAdd(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="1906px"
      height="254px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      overflow="hidden"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "DataAdd")}
      {...rest}
    >
      <Heading
        width="unset"
        height="unset"
        position="absolute"
        top="0px"
        left="17px"
        level="1"
        children="Data add..."
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
      <Flex
        gap="16px"
        direction="row"
        width="1872px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        position="absolute"
        top="56px"
        left="17px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 456")}
      >
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Scan Barcode"
          {...getOverrideProps(overrides, "BtnScanbarcode")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Manual setting"
          {...getOverrideProps(overrides, "BtnManualSetting")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="Import File"
          {...getOverrideProps(overrides, "BtnImportFile")}
        ></Button>
      </Flex>
      <Flex
        width="1872px"
        height="unset"
        {...getOverrideProps(overrides, "InputDataRow")}
      ></Flex>
      <Flex
        width="1872px"
        height="unset"
        {...getOverrideProps(overrides, "InputDataArea")}
      ></Flex>
      <Flex
        width="1872px"
        height="40px"
        {...getOverrideProps(overrides, "ImportDataFooderBtns")}
      ></Flex>
      <Flex
        width="1872px"
        height="unset"
        {...getOverrideProps(overrides, "DataAddHeader")}
      ></Flex>
    </View>
  );
}
