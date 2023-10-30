/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import {
  Button,
  CheckboxField,
  Flex,
  Icon,
  SelectField,
  Text,
  TextField,
} from "@aws-amplify/ui-react";
export default function AddRecordForm(props) {
  const { Category, category, overrides, ...rest } = props;
  return (
    <Flex
      gap="24px"
      direction="column"
      width="823px"
      height="unset"
      justifyContent="flex-start"
      alignItems="flex-start"
      position="relative"
      borderRadius="8px"
      padding="32px 32px 32px 32px"
      backgroundColor="rgba(250,250,250,1)"
      {...getOverrideProps(overrides, "AddRecordForm")}
      {...rest}
    >
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="Barcord Scan"
        {...getOverrideProps(overrides, "Button38485303")}
      ></Button>
      <Text
        fontFamily="Inter"
        fontSize="16px"
        fontWeight="400"
        color="rgba(0,0,0,1)"
        lineHeight="24px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="..Add manual"
        {...getOverrideProps(overrides, "..Add manual")}
      ></Text>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 443")}
      >
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "Category")}
        >
          <SelectField
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField384810047")}
          ></SelectField>
        </Flex>
        <Flex
          gap="8px"
          direction="column"
          width="unset"
          height="unset"
          justifyContent="flex-start"
          alignItems="flex-start"
          grow="1"
          shrink="1"
          basis="0"
          position="relative"
          padding="0px 0px 0px 0px"
          {...getOverrideProps(overrides, "SubCategory384810506")}
        >
          <SelectField
            width="unset"
            height="unset"
            shrink="0"
            alignSelf="stretch"
            size="small"
            isDisabled={false}
            labelHidden={false}
            variation="default"
            {...getOverrideProps(overrides, "SelectField384810507")}
          ></SelectField>
        </Flex>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        label="Item Name"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField29766939")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Barcode"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField38485745")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="Expration"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField38485807")}
      ></TextField>
      <CheckboxField
        width="unset"
        height="unset"
        label="This product requires management of the expiry date."
        shrink="0"
        size="default"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="end"
        {...getOverrideProps(overrides, "CheckboxField29766940")}
      ></CheckboxField>
      <Flex
        gap="24px"
        direction="row"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 444")}
      >
        <TextField
          width="unset"
          height="unset"
          label="Defoult Stock Count"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38486002")}
        ></TextField>
        <TextField
          width="unset"
          height="unset"
          label="Stock limited Count"
          grow="1"
          shrink="1"
          basis="0"
          placeholder=""
          size="default"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "TextField38486078")}
        ></TextField>
      </Flex>
      <CheckboxField
        width="unset"
        height="unset"
        label="This product is for events."
        shrink="0"
        size="default"
        defaultChecked={false}
        isDisabled={false}
        labelPosition="end"
        aria-disabled=""
        {...getOverrideProps(overrides, "CheckboxField38487724")}
      ></CheckboxField>
      <Flex
        gap="4px"
        direction="column"
        width="unset"
        height="68px"
        justifyContent="center"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SelectField388514573")}
      >
        <Text
          fontFamily="Inter"
          fontSize="14px"
          fontWeight="400"
          color="rgba(48,64,80,1)"
          lineHeight="21px"
          textAlign="left"
          display="block"
          direction="column"
          justifyContent="unset"
          width="unset"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          alignSelf="stretch"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children="Used Event"
          {...getOverrideProps(overrides, "\u274C388514574")}
        ></Text>
        <Flex
          gap="10px"
          direction="row"
          width="759px"
          height="53px"
          justifyContent="flex-start"
          alignItems="center"
          shrink="0"
          position="relative"
          padding="10px 10px 10px 10px"
          {...getOverrideProps(overrides, "Frame 442")}
        >
          <Flex
            gap="50px"
            direction="row"
            width="unset"
            height="33px"
            justifyContent="flex-start"
            alignItems="flex-start"
            grow="1"
            shrink="1"
            basis="0"
            position="relative"
            padding="0px 0px 0px 0px"
            {...getOverrideProps(overrides, "InputGroup")}
          >
            <Flex
              gap="10px"
              direction="row"
              width="unset"
              height="unset"
              justifyContent="center"
              alignItems="center"
              grow="1"
              shrink="1"
              basis="0"
              position="relative"
              border="1px SOLID rgba(174,179,183,1)"
              borderRadius="5px 1px 1px 5px"
              padding="6px 12px 6px 12px"
              {...getOverrideProps(overrides, "Input")}
            >
              <Text
                fontFamily="Inter"
                fontSize="14px"
                fontWeight="400"
                color="rgba(128,128,128,1)"
                lineHeight="21px"
                textAlign="left"
                display="block"
                direction="column"
                justifyContent="unset"
                width="unset"
                height="unset"
                gap="unset"
                alignItems="unset"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                whiteSpace="pre-wrap"
                children="誕生日イベント"
                {...getOverrideProps(overrides, "\u274C388514578")}
              ></Text>
              <Icon
                width="16px"
                height="16px"
                display="block"
                gap="unset"
                alignItems="unset"
                justifyContent="unset"
                overflow="hidden"
                shrink="0"
                position="relative"
                padding="0px 0px 0px 0px"
                type="chevron_down"
                fontSize="16px"
                {...getOverrideProps(overrides, "\uD83D\uDD12Icon")}
              ></Icon>
            </Flex>
          </Flex>
          <Button
            width="65px"
            height="28px"
            gap="50px"
            justifyContent="flex-start"
            shrink="0"
            size="default"
            isDisabled={false}
            variation="default"
            children="..add"
            {...getOverrideProps(overrides, "Button388514929")}
          ></Button>
        </Flex>
      </Flex>
      <TextField
        width="unset"
        height="unset"
        label="&#x9;Used Event"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField38488822")}
      ></TextField>
      <TextField
        width="unset"
        height="unset"
        label="value"
        shrink="0"
        alignSelf="stretch"
        placeholder=""
        size="default"
        isDisabled={false}
        labelHidden={false}
        variation="default"
        {...getOverrideProps(overrides, "TextField38486161")}
      ></TextField>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SubCategory388513142")}
      >
        <SelectField
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField388513143")}
        ></SelectField>
      </Flex>
      <Flex
        gap="8px"
        direction="column"
        width="unset"
        height="unset"
        justifyContent="flex-start"
        alignItems="flex-start"
        shrink="0"
        alignSelf="stretch"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "SubCategory388513776")}
      >
        <SelectField
          width="unset"
          height="unset"
          shrink="0"
          alignSelf="stretch"
          size="small"
          isDisabled={false}
          labelHidden={false}
          variation="default"
          {...getOverrideProps(overrides, "SelectField388513777")}
        ></SelectField>
      </Flex>
      <Button
        width="unset"
        height="unset"
        shrink="0"
        alignSelf="stretch"
        size="large"
        isDisabled={false}
        variation="primary"
        children="confine"
        {...getOverrideProps(overrides, "Button39353403")}
      ></Button>
    </Flex>
  );
}
