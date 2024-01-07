import * as React from "react";
import { getOverrideProps } from "../ui-components/utils";
import { Button, Flex } from "@aws-amplify/ui-react";
export function STLoginViews(props) {
  const { overrides, ...rest } = props;
  return (
    <Flex
      gap="10px"
      direction="row"
      width="unset"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      overflow="hidden"
      position="relative"
      padding="10px 10px 10px 10px"
      backgroundColor="rgba(255,255,255,1)"
      {...getOverrideProps(overrides, "STSignInOrCreateAcountChangeBar")}
      {...rest}
    >
      <Button
        width="150px"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="SingIn"
        {...getOverrideProps(overrides, "SIBtn")}
      onClick={console.log("test")} ></Button>
      <Button
        width="150px"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="CreateAcount"
        {...getOverrideProps(overrides, "CAcountBtn")}
      ></Button>
    </Flex>
  );
}
