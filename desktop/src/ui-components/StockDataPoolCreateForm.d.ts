/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
import { Event } from "../models";
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
export declare type StockDataPoolCreateFormInputValues = {
    itemName?: string;
    barcode?: number;
    expiration?: string;
    stockInt?: number;
    limitInt?: number;
    value?: number;
    purchaseID?: string;
    untitledfield?: string;
    status?: string;
    stockssubcategoryID?: string;
    tenantsID?: string;
    events?: Event[];
};
export declare type StockDataPoolCreateFormValidationValues = {
    itemName?: ValidationFunction<string>;
    barcode?: ValidationFunction<number>;
    expiration?: ValidationFunction<string>;
    stockInt?: ValidationFunction<number>;
    limitInt?: ValidationFunction<number>;
    value?: ValidationFunction<number>;
    purchaseID?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
    status?: ValidationFunction<string>;
    stockssubcategoryID?: ValidationFunction<string>;
    tenantsID?: ValidationFunction<string>;
    events?: ValidationFunction<Event>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockDataPoolCreateFormOverridesProps = {
    StockDataPoolCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    itemName?: PrimitiveOverrideProps<TextFieldProps>;
    barcode?: PrimitiveOverrideProps<TextFieldProps>;
    expiration?: PrimitiveOverrideProps<TextAreaFieldProps>;
    stockInt?: PrimitiveOverrideProps<TextFieldProps>;
    limitInt?: PrimitiveOverrideProps<TextFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    purchaseID?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    stockssubcategoryID?: PrimitiveOverrideProps<AutocompleteProps>;
    tenantsID?: PrimitiveOverrideProps<AutocompleteProps>;
    events?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type StockDataPoolCreateFormProps = React.PropsWithChildren<{
    overrides?: StockDataPoolCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StockDataPoolCreateFormInputValues) => StockDataPoolCreateFormInputValues;
    onSuccess?: (fields: StockDataPoolCreateFormInputValues) => void;
    onError?: (fields: StockDataPoolCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockDataPoolCreateFormInputValues) => StockDataPoolCreateFormInputValues;
    onValidate?: StockDataPoolCreateFormValidationValues;
} & React.CSSProperties>;
export default function StockDataPoolCreateForm(props: StockDataPoolCreateFormProps): React.ReactElement;