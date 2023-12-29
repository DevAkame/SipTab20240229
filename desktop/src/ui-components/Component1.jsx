/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Alert, Button, Heading, TextField, View } from "@aws-amplify/ui-react";
export default function Component1(props) {
  const { overrides, ...rest } = props;
  return (
    <View
      width="384px"
      height="234px"
      display="block"
      gap="unset"
      alignItems="unset"
      justifyContent="unset"
      position="relative"
      padding="0px 0px 0px 0px"
      {...getOverrideProps(overrides, "Component1")}
      {...rest}
    >
      <Alert
        width="384px"
        height="72px"
        heading="Error"
        position="absolute"
        top="0%"
        bottom="69.23%"
        left="0%"
        right="0%"
        variation="error"
        isDismissible={false}
        hasIcon={true}
        children="This Address is not registered..."
        {...getOverrideProps(overrides, "Alert")}
      ></Alert>
      <TextField
        width="300px"
        height="58px"
        label="Email"
        alignItems="center"
        position="absolute"
        top="38.03%"
        bottom="37.18%"
        left="10.94%"
        right="10.94%"
        placeholder="Placeholder"
        size="small"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "EmailField")}
      ></TextField>
      <Button
        width="300px"
        height="33px"
        position="absolute"
        padding="5px 0px 5px 0px"
        top="70.09%"
        bottom="15.81%"
        left="10.94%"
        right="10.94%"
        size="small"
        isDisabled={false}
        variation="primary"
        children="Confirm"
        {...getOverrideProps(overrides, "ConfirmBtn")}
      ></Button>
      <Heading
        width="67px"
        height="20px"
        position="absolute"
        top="91.45%"
        bottom="0%"
        left="41.28%"
        right="41.28%"
        level="6"
        children="Go Back"
        {...getOverrideProps(overrides, "Heading")}
      ></Heading>
    </View>
  );
}
