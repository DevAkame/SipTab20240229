/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, HeadingProps, IconProps, ImageProps, SelectFieldProps } from "@aws-amplify/ui-react";
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
export declare type SipTabMainHeaderOverridesProps = {
    SipTabMainHeader?: PrimitiveOverrideProps<FlexProps>;
    SipTabIconTeantFreame?: PrimitiveOverrideProps<FlexProps>;
    SipTabIcon?: PrimitiveOverrideProps<ImageProps>;
    AsinTenant?: PrimitiveOverrideProps<SelectFieldProps>;
    SipTabAccountFreame?: PrimitiveOverrideProps<FlexProps>;
    SipTabAccountInfo?: PrimitiveOverrideProps<IconProps>;
    SipTabHeaderAccountName?: PrimitiveOverrideProps<HeadingProps>;
    SipTabSignOutBtn?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SipTabMainHeaderProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SipTabMainHeaderOverridesProps | undefined | null;
}>;
export default function SipTabMainHeader(props: SipTabMainHeaderProps): React.ReactElement;
