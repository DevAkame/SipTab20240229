/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuthSignOutAction } from "./utils";
import {
  Button,
  Flex,
  Heading,
  Icon,
  Image,
  SelectField,
} from "@aws-amplify/ui-react";
export default function SipTabMainHeader(props) {
  const { overrides, ...rest } = props;
  const sipTabSignOutBtnOnClick = useAuthSignOutAction({ global: false });
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="center"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "SipTabMainHeader")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        backgroundColor="rgba(0,0,0,0)"
        {...getOverrideProps(overrides, "SipTabIconTeantFreame")}
      >
        <Image
          width="50px"
          height="50px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          objectFit="cover"
          src="siptab.png"
          {...getOverrideProps(overrides, "SipTabIcon")}
        ></Image>
        <SelectField
          width="unset"
          height="unset"
          shrink="0"
          placeholder="Placeholder"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "AsinTenant")}
        ></SelectField>
      </Flex>
      <Flex
        gap="10px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        backgroundColor="rgba(255,255,255,1)"
        {...getOverrideProps(overrides, "SipTabAccountFreame")}
      >
        <Icon
          width="24px"
          height="24px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          overflow="hidden"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          type="info"
          fontSize="24px"
          {...getOverrideProps(overrides, "SipTabAccountInfo")}
        ></Icon>
        <Heading
          width="unset"
          height="unset"
          shrink="0"
          level="4"
          children="Akame"
          {...getOverrideProps(overrides, "SipTabHeaderAccountName")}
        ></Heading>
        <Button
          width="unset"
          height="unset"
          justifyContent="flex-start"
          shrink="0"
          size="default"
          isDisabled={false}
          variation="primary"
          children="SignOut"
          onClick={() => {
            sipTabSignOutBtnOnClick();
          }}
          {...getOverrideProps(overrides, "SipTabSignOutBtn")}
        ></Button>
      </Flex>
    </Flex>
  );
}
