/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StockDataPool, Event } from "../models";
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
export declare type TenantsCreateFormInputValues = {
    name?: string;
    StockDataPools?: StockDataPool[];
    Events?: Event[];
};
export declare type TenantsCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    StockDataPools?: ValidationFunction<StockDataPool>;
    Events?: ValidationFunction<Event>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type TenantsCreateFormOverridesProps = {
    TenantsCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    StockDataPools?: PrimitiveOverrideProps<AutocompleteProps>;
    Events?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type TenantsCreateFormProps = React.PropsWithChildren<{
    overrides?: TenantsCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: TenantsCreateFormInputValues) => TenantsCreateFormInputValues;
    onSuccess?: (fields: TenantsCreateFormInputValues) => void;
    onError?: (fields: TenantsCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: TenantsCreateFormInputValues) => TenantsCreateFormInputValues;
    onValidate?: TenantsCreateFormValidationValues;
} & React.CSSProperties>;
export default function TenantsCreateForm(props: TenantsCreateFormProps): React.ReactElement;
