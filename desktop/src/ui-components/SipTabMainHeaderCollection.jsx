/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import SipTabMainHeader from "./SipTabMainHeader";
import { getOverrideProps } from "./utils";
import { Collection } from "@aws-amplify/ui-react";
export default function SipTabMainHeaderCollection(props) {
  const { items, overrideItems, overrides, ...rest } = props;
  return (
    <Collection
      type="list"
      direction="column"
      justifyContent="left"
      items={items || []}
      {...getOverrideProps(overrides, "SipTabMainHeaderCollection")}
      {...rest}
    >
      {(item, index) => (
        <SipTabMainHeader
          key={item.id}
          {...(overrideItems && overrideItems({ item, index }))}
        ></SipTabMainHeader>
      )}
    </Collection>
  );
}
