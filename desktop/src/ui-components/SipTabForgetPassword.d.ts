/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Component1Props } from "./Component1";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type EscapeHatchProps = {
    [elementHierarchy: string]: Record<string, unknown>;
} | null;
export declare type VariantValues = {
    [key: string]: string;
};
export declare type Variant = {
    variantValues: VariantValues;
    overrides: EscapeHatchProps;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SipTabForgetPasswordOverridesProps = {
    SipTabForgetPassword?: PrimitiveOverrideProps<FlexProps>;
    "Component 1"?: Component1Props;
} & EscapeHatchProps;
export declare type SipTabForgetPasswordProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SipTabForgetPasswordOverridesProps | undefined | null;
}>;
export default function SipTabForgetPassword(props: SipTabForgetPasswordProps): React.ReactElement;
