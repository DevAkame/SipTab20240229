/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { getOverrideProps } from "./utils";
import { Button, Flex, Icon, Text, View } from "@aws-amplify/ui-react";
export default function DataRow(props) {
  const { stockDataPool, stocksSubCategory, stksCategory, overrides, ...rest } =
    props;
  return (
    <Flex
      gap="16px"
      direction="row"
      width="1362px"
      height="unset"
      justifyContent="center"
      alignItems="center"
      position="relative"
      padding="16px 0px 16px 0px"
      {...getOverrideProps(overrides, "DataRow")}
      {...rest}
    >
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={stksCategory?.name}
        {...getOverrideProps(overrides, "categolys")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={stocksSubCategory?.name}
        {...getOverrideProps(overrides, "subcategolys")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="12px"
        fontWeight="600"
        color="rgba(13,26,38,1)"
        lineHeight="18px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="unset"
        height="unset"
        gap="unset"
        alignItems="unset"
        grow="1"
        shrink="1"
        basis="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={stockDataPool?.itemName}
        {...getOverrideProps(overrides, "itemName38474890")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="90px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={stockDataPool?.barcode}
        {...getOverrideProps(overrides, "itemName38484967")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="400"
        color="rgba(13,26,38,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="70px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={stockDataPool?.expiration}
        {...getOverrideProps(overrides, "itemName38484968")}
      ></Text>
      <Flex
        gap="5px"
        direction="row"
        width="70px"
        height="unset"
        justifyContent="center"
        alignItems="center"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        {...getOverrideProps(overrides, "Frame 445")}
      >
        <Text
          fontFamily="Inter"
          fontSize="10px"
          fontWeight="500"
          color="rgba(13,26,38,1)"
          lineHeight="15px"
          textAlign="right"
          display="block"
          direction="column"
          justifyContent="unset"
          width="30px"
          height="unset"
          gap="unset"
          alignItems="unset"
          shrink="0"
          position="relative"
          padding="0px 0px 0px 0px"
          whiteSpace="pre-wrap"
          children={stockDataPool?.stockInt}
          {...getOverrideProps(overrides, "stockInt")}
        ></Text>
        <Flex
          padding="0px 0px 0px 0px"
          width="10px"
          height="10px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, "countUpIcon")}
        >
          <View
            padding="0px 0px 0px 0px"
            width="10px"
            height="10px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group388915750")}
          >
            <Icon
              width="10px"
              height="3.57px"
              viewBox={{ minX: 0, minY: 0, width: 10, height: 3.5703125 }}
              paths={[
                {
                  d: "M9.41887 4.38418C9.86833 4.70513 10.4929 4.60095 10.8138 4.1515C11.1348 3.70204 11.0306 3.0775 10.5811 2.75656L9.41887 4.38418ZM5.00002 0L5.58115 -0.813814C5.2335 -1.06206 4.76655 -1.06206 4.4189 -0.813816L5.00002 0ZM-0.581123 2.75655C-1.03058 3.0775 -1.13476 3.70203 -0.813816 4.15149C-0.492871 4.60095 0.131664 4.70513 0.581123 4.38419L-0.581123 2.75655ZM10.5811 2.75656L5.58115 -0.813814L4.41889 0.813814L9.41887 4.38418L10.5811 2.75656ZM4.4189 -0.813816L-0.581123 2.75655L0.581123 4.38419L5.58114 0.813816L4.4189 -0.813816Z",
                  stroke: "rgba(41,45,50,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="64.3%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector388915751")}
            ></Icon>
            <Icon
              width="0px"
              height="9.9px"
              viewBox={{ minX: 0, minY: 0, width: 1, height: 9.8994140625 }}
              paths={[
                {
                  d: "M-1 9.89938C-1 10.4517 -0.552285 10.8994 0 10.8994C0.552285 10.8994 1 10.4517 1 9.89938L-1 9.89938ZM1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM1 9.89938L1 0L-1 0L-1 9.89938L1 9.89938Z",
                  stroke: "rgba(41,45,50,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="1%"
              bottom="0%"
              left="50%"
              right="50%"
              {...getOverrideProps(overrides, "Vector388915752")}
            ></Icon>
          </View>
        </Flex>
        <Flex
          padding="0px 0px 0px 0px"
          width="10px"
          height="9.8px"
          display="block"
          gap="unset"
          alignItems="unset"
          justifyContent="unset"
          shrink="0"
          position="relative"
          {...getOverrideProps(overrides, '\uD83E\uDD86 icon "arrow down 1"')}
        >
          <View
            padding="0px 0px 0px 0px"
            width="10px"
            height="9.8px"
            display="block"
            gap="unset"
            alignItems="unset"
            justifyContent="unset"
            position="absolute"
            top="0%"
            bottom="0%"
            left="0%"
            right="0%"
            {...getOverrideProps(overrides, "Group388916086")}
          >
            <Icon
              width="10px"
              height="3.5px"
              viewBox={{ minX: 0, minY: 0, width: 10, height: 3.5 }}
              paths={[
                {
                  d: "M10.5735 0.819232C11.0259 0.502517 11.1359 -0.121013 10.8192 -0.573462C10.5025 -1.02591 9.87899 -1.13595 9.42654 -0.819232L10.5735 0.819232ZM4.99999 3.50001L4.42652 4.31924C4.77084 4.56026 5.22913 4.56027 5.57345 4.31924L4.99999 3.50001ZM0.573464 -0.819231C0.121016 -1.13595 -0.502515 -1.02591 -0.819231 -0.573464C-1.13595 -0.121016 -1.02591 0.502515 -0.573464 0.819231L0.573464 -0.819231ZM9.42654 -0.819232L4.42652 2.68078L5.57345 4.31924L10.5735 0.819232L9.42654 -0.819232ZM5.57345 2.68078L0.573464 -0.819231L-0.573464 0.819231L4.42652 4.31924L5.57345 2.68078Z",
                  stroke: "rgba(41,45,50,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="64.29%"
              bottom="0%"
              left="0%"
              right="0%"
              {...getOverrideProps(overrides, "Vector388916087")}
            ></Icon>
            <Icon
              width="0px"
              height="9.7px"
              viewBox={{ minX: 0, minY: 0, width: 1, height: 9.7041015625 }}
              paths={[
                {
                  d: "M1 0C1 -0.552285 0.552285 -1 0 -1C-0.552285 -1 -1 -0.552285 -1 0L1 0ZM-1 9.70431C-1 10.2566 -0.552285 10.7043 0 10.7043C0.552285 10.7043 1 10.2566 1 9.70431L-1 9.70431ZM-1 0L-1 9.70431L1 9.70431L1 0L-1 0Z",
                  stroke: "rgba(41,45,50,1)",
                  fillRule: "nonzero",
                  strokeLinejoin: "round",
                  strokeWidth: 2,
                },
              ]}
              display="block"
              gap="unset"
              alignItems="unset"
              justifyContent="unset"
              position="absolute"
              top="0%"
              bottom="0.99%"
              left="50%"
              right="50%"
              {...getOverrideProps(overrides, "Vector388916088")}
            ></Icon>
          </View>
        </Flex>
      </Flex>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="15px"
        textAlign="right"
        display="block"
        direction="column"
        justifyContent="unset"
        width="30px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={stockDataPool?.limitInt}
        {...getOverrideProps(overrides, "limitInt")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children="Enable"
        {...getOverrideProps(overrides, "statusStr38474894")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="80px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={stockDataPool?.value}
        {...getOverrideProps(overrides, "statusStr38485135")}
      ></Text>
      <Text
        fontFamily="Inter"
        fontSize="10px"
        fontWeight="500"
        color="rgba(13,26,38,1)"
        lineHeight="15px"
        textAlign="left"
        display="block"
        direction="column"
        justifyContent="unset"
        width="100px"
        height="unset"
        gap="unset"
        alignItems="unset"
        shrink="0"
        position="relative"
        padding="0px 0px 0px 0px"
        whiteSpace="pre-wrap"
        children={stockDataPool?.purchaseID}
        {...getOverrideProps(overrides, "statusStr38485016")}
      ></Text>
      <Button
        width="50px"
        height="unset"
        shrink="0"
        size="small"
        isDisabled={false}
        variation="link"
        children="Edit"
        {...getOverrideProps(overrides, "Button")}
      ></Button>
    </Flex>
  );
}
