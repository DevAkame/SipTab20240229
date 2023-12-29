/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, ImageProps } from "@aws-amplify/ui-react";
import { DisDisProps } from "./DisDis";
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
export declare type SipTabDisptionOverridesProps = {
    SipTabDisption?: PrimitiveOverrideProps<FlexProps>;
    DisTitle?: PrimitiveOverrideProps<FlexProps>;
    "siptab_icon 1"?: PrimitiveOverrideProps<ImageProps>;
    DisContent?: PrimitiveOverrideProps<FlexProps>;
    DisDis?: DisDisProps;
    WhySipTab?: PrimitiveOverrideProps<ButtonProps>;
    DocSipTab?: PrimitiveOverrideProps<ButtonProps>;
    ContactAs?: PrimitiveOverrideProps<ButtonProps>;
    DisFooder?: PrimitiveOverrideProps<FlexProps>;
    InfoAkame?: PrimitiveOverrideProps<FlexProps>;
    LogAkame?: PrimitiveOverrideProps<ImageProps>;
    AkameBtn?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SipTabDisptionProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SipTabDisptionOverridesProps | undefined | null;
}>;
export default function SipTabDisption(props: SipTabDisptionProps): React.ReactElement;
