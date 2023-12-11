/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { LogoSipTab32Props } from "./LogoSipTab32";
import { ButtonProps, FlexProps, IconProps, SelectFieldProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type NavBarHeaderOverridesProps = {
    NavBarHeader?: PrimitiveOverrideProps<FlexProps>;
    "Frame 454"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 450"?: PrimitiveOverrideProps<FlexProps>;
    LogoSipTab32?: LogoSipTab32Props;
    NavGroupSelect?: PrimitiveOverrideProps<SelectFieldProps>;
    "Frame 453"?: PrimitiveOverrideProps<FlexProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    label?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderOverridesProps | undefined | null;
}>;
export default function NavBarHeader(props: NavBarHeaderProps): React.ReactElement;
