/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type LoginFormOverridesProps = {
    LoginForm?: PrimitiveOverrideProps<FlexProps>;
    "Frame 1"?: PrimitiveOverrideProps<FlexProps>;
    login_select?: PrimitiveOverrideProps<FlexProps>;
    TextField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    LoginBtn?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type LoginFormProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: LoginFormOverridesProps | undefined | null;
}>;
export default function LoginForm(props: LoginFormProps): React.ReactElement;
