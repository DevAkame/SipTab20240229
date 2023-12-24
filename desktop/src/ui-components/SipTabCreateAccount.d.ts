/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AlertProps, ButtonProps, FlexProps, PasswordFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type SipTabCreateAccountOverridesProps = {
    SipTabCreateAccount?: PrimitiveOverrideProps<FlexProps>;
    Alert?: PrimitiveOverrideProps<AlertProps>;
    EmailField?: PrimitiveOverrideProps<TextFieldProps>;
    NameField?: PrimitiveOverrideProps<TextFieldProps>;
    PasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    ConfirmPasswordField?: PrimitiveOverrideProps<PasswordFieldProps>;
    ConfirmBtn?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type SipTabCreateAccountProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SipTabCreateAccountOverridesProps | undefined | null;
}>;
export default function SipTabCreateAccount(props: SipTabCreateAccountProps): React.ReactElement;
