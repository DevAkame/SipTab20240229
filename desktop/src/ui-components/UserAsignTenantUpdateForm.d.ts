/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { UserAsignTenant } from "../models";
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
export declare type UserAsignTenantUpdateFormInputValues = {
    userSub?: string;
    Status?: string;
    tenantsID?: string;
};
export declare type UserAsignTenantUpdateFormValidationValues = {
    userSub?: ValidationFunction<string>;
    Status?: ValidationFunction<string>;
    tenantsID?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type UserAsignTenantUpdateFormOverridesProps = {
    UserAsignTenantUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    userSub?: PrimitiveOverrideProps<TextFieldProps>;
    Status?: PrimitiveOverrideProps<TextFieldProps>;
    tenantsID?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type UserAsignTenantUpdateFormProps = React.PropsWithChildren<{
    overrides?: UserAsignTenantUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    userAsignTenant?: UserAsignTenant;
    onSubmit?: (fields: UserAsignTenantUpdateFormInputValues) => UserAsignTenantUpdateFormInputValues;
    onSuccess?: (fields: UserAsignTenantUpdateFormInputValues) => void;
    onError?: (fields: UserAsignTenantUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: UserAsignTenantUpdateFormInputValues) => UserAsignTenantUpdateFormInputValues;
    onValidate?: UserAsignTenantUpdateFormValidationValues;
} & React.CSSProperties>;
export default function UserAsignTenantUpdateForm(props: UserAsignTenantUpdateFormProps): React.ReactElement;
