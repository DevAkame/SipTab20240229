/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps, useAuthSignOutAction } from "./utils";
import LogoSipTab32 from "./LogoSipTab32";
import {
  Button,
  Flex,
  Heading,
  Icon,
  SelectField,
  View,
} from "@aws-amplify/ui-react";
export default function NavBarHeader(props) {
  const { usermails, tenants, overrides, ...rest } = props;
  const buttonOnClick = useAuthSignOutAction({ global: false });
  return (
    <View
      width="1496px"
      height="66px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "NavBarHeader")}
      {...rest}
    >
      <Flex
        gap="689px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        position="absolute"
        top="18px"
        left="14px"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 454")}
      >
        <Flex
          gap="21px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 450")}
        >
          <LogoSipTab32
            width="32px"
            height="31.22px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "LogoSipTab32")}
          ></LogoSipTab32>
          <SelectField
            width="200px"
            height="unset"
            shrink="0"
            placeholder="Placeholder"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField")}
          ></SelectField>
          <SelectField
            width="150px"
            height="unset"
            shrink="0"
            placeholder="Placeholder"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "NavGroupSelect")}
          ></SelectField>
        </Flex>
        <Flex
          gap="16px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Frame 453")}
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
            {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
          ></Icon>
          <Heading
            width="unset"
            height="unset"
            shrink="0"
            level="1"
            children="user.username"
            {...getOverrideProps(overrides, "Heading")}
          ></Heading>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="default"
            children="Sign Out"
            onClick={() => {
              buttonOnClick();
            }}
            {...getOverrideProps(overrides, "Button")}
          ></Button>
        </Flex>
      </Flex>
    </View>
  );
}
