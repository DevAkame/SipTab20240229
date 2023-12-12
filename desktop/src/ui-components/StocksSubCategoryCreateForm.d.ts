/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StockDataPool } from "../models";
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
export declare type StocksSubCategoryCreateFormInputValues = {
    name?: string;
    stkscategoryID?: string;
    StockDataPools?: StockDataPool[];
};
export declare type StocksSubCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
    stkscategoryID?: ValidationFunction<string>;
    StockDataPools?: ValidationFunction<StockDataPool>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StocksSubCategoryCreateFormOverridesProps = {
    StocksSubCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    stkscategoryID?: PrimitiveOverrideProps<AutocompleteProps>;
    StockDataPools?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type StocksSubCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: StocksSubCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StocksSubCategoryCreateFormInputValues) => StocksSubCategoryCreateFormInputValues;
    onSuccess?: (fields: StocksSubCategoryCreateFormInputValues) => void;
    onError?: (fields: StocksSubCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StocksSubCategoryCreateFormInputValues) => StocksSubCategoryCreateFormInputValues;
    onValidate?: StocksSubCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function StocksSubCategoryCreateForm(props: StocksSubCategoryCreateFormProps): React.ReactElement;
