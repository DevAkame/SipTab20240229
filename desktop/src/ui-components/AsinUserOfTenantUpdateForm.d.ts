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
export declare type AsinUserOfTenantUpdateFormInputValues = {
    tenantID?: string;
    userID?: string;
};
export declare type AsinUserOfTenantUpdateFormValidationValues = {
    tenantID?: ValidationFunction<string>;
    userID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type AsinUserOfTenantUpdateFormOverridesProps = {
    AsinUserOfTenantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    tenantID?: PrimitiveOverrideProps<TextFieldProps>;
    userID?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type AsinUserOfTenantUpdateFormProps = React.PropsWithChildren<{
    overrides?: AsinUserOfTenantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    asinUserOfTenant?: any;
    onSubmit?: (fields: AsinUserOfTenantUpdateFormInputValues) => AsinUserOfTenantUpdateFormInputValues;
    onSuccess?: (fields: AsinUserOfTenantUpdateFormInputValues) => void;
    onError?: (fields: AsinUserOfTenantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: AsinUserOfTenantUpdateFormInputValues) => AsinUserOfTenantUpdateFormInputValues;
    onValidate?: AsinUserOfTenantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function AsinUserOfTenantUpdateForm(props: AsinUserOfTenantUpdateFormProps): React.ReactElement;
