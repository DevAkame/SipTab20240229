/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UISideNav } from "../models";
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
export declare type ValidationResponse = {
    hasError: boolean;
    errorMessage?: string;
};
export declare type ValidationFunction<T> = (value: T, validationResponse: ValidationResponse) => ValidationResponse | Promise<ValidationResponse>;
export declare type UISideNavUpdateFormInputValues = {
    name?: string;
    src?: string;
    path?: string;
    status?: string;
};
export declare type UISideNavUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    src?: ValidationFunction<string>;
    path?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UISideNavUpdateFormOverridesProps = {
    UISideNavUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    src?: PrimitiveOverrideProps<TextFieldProps>;
    path?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
} & EscapeHatchProps;
export declare type UISideNavUpdateFormProps = React.PropsWithChildren<{
    overrides?: UISideNavUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    uISideNav?: UISideNav;
    onSubmit?: (fields: UISideNavUpdateFormInputValues) => UISideNavUpdateFormInputValues;
    onSuccess?: (fields: UISideNavUpdateFormInputValues) => void;
    onError?: (fields: UISideNavUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UISideNavUpdateFormInputValues) => UISideNavUpdateFormInputValues;
    onValidate?: UISideNavUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UISideNavUpdateForm(props: UISideNavUpdateFormProps): React.ReactElement;
