/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Image } from "@aws-amplify/ui-react";
import DisDis from "./DisDis";
export default function SipTabDisption(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="column"
      width="unset"
      height="546px"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="0px 0px 0px 0px"
      backgroundColor="rgba(64,170,191,0.5)"
      {...getOverrideProps(overrides, "SipTabDisption")}
      {...rest}
    >
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="center"
        overflow="hidden"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="30px 10px 10px 10px"
        {...getOverrideProps(overrides, "DisTitle")}
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
          {...getOverrideProps(overrides, "siptab_icon 1")}
        ></Image>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        position="relative"
        padding="10px 10px 10px 10px"
        {...getOverrideProps(overrides, "DisContent")}
      >
        <DisDis
          width="325px"
          height="36px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "DisDis")}
        ></DisDis>
        <Button
          width="unset"
          height="unset"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          variation="link"
          children="SIpTabについて"
          {...getOverrideProps(overrides, "WhySipTab")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          variation="link"
          children="SipTabご利用方法"
          {...getOverrideProps(overrides, "DocSipTab")}
        ></Button>
        <Button
          width="unset"
          height="unset"
          justifyContent="flex-start"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          variation="link"
          children="お問い合わせ"
          {...getOverrideProps(overrides, "ContactAs")}
        ></Button>
      </Flex>
      <Flex
        gap="10px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-end"
        alignItems="center"
        grow="1"
        shrink="1"
        basis="0"
        alignSelf="stretch"
        position="relative"
        padding="10px 10px 0px 10px"
        {...getOverrideProps(overrides, "DisFooder")}
      >
        <Flex
          gap="2px"
          direction="row"
          width="unset"
          height="unset"
          justifyContent="center"
          alignItems="center"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "InfoAkame")}
        >
          <Image
            width="20px"
            height="15.9px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            shrink="0"
            position="relative"
            padding="0px 0px 0px 0px"
            objectFit="cover"
            {...getOverrideProps(overrides, "LogAkame")}
          ></Image>
          <Button
            width="unset"
            height="unset"
            shrink="0"
            size="small"
            isDisabled={false}
            variation="link"
            children="Akame"
            {...getOverrideProps(overrides, "AkameBtn")}
          ></Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
