/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AlertProps, ButtonProps, FlexProps, HeadingProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SipTabSignInOverridesProps = {
    SipTabSignIn?: PrimitiveOverrideProps<FlexProps>;
    Alert?: PrimitiveOverrideProps<AlertProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type SipTabSignInProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SipTabSignInOverridesProps | undefined | null;
}>;
export default function SipTabSignIn(props: SipTabSignInProps): React.ReactElement;
