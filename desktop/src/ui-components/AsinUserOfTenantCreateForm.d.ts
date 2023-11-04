/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type AsinUserOfTenantCreateFormInputValues = {
    tenantID?: string;
    userID?: string;
};
export declare type AsinUserOfTenantCreateFormValidationValues = {
    tenantID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AsinUserOfTenantCreateFormOverridesProps = {
    AsinUserOfTenantCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tenantID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AsinUserOfTenantCreateFormProps = React.PropsWithChildren<{
    overrides?: AsinUserOfTenantCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: AsinUserOfTenantCreateFormInputValues) => AsinUserOfTenantCreateFormInputValues;
    onSuccess?: (fields: AsinUserOfTenantCreateFormInputValues) => void;
    onError?: (fields: AsinUserOfTenantCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AsinUserOfTenantCreateFormInputValues) => AsinUserOfTenantCreateFormInputValues;
    onValidate?: AsinUserOfTenantCreateFormValidationValues;
} & React.CSSProperties>;
export default function AsinUserOfTenantCreateForm(props: AsinUserOfTenantCreateFormProps): React.ReactElement;
