/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { AutocompleteProps, GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StocksSubCategory, StockDataPool } from "../models";
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
export declare type StocksSubCategoryUpdateFormInputValues = {
    name?: string;
    stkscategoryID?: string;
    StockDataPools?: StockDataPool[];
};
export declare type StocksSubCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
    stkscategoryID?: ValidationFunction<string>;
    StockDataPools?: ValidationFunction<StockDataPool>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StocksSubCategoryUpdateFormOverridesProps = {
    StocksSubCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
    stkscategoryID?: PrimitiveOverrideProps<AutocompleteProps>;
    StockDataPools?: PrimitiveOverrideProps<AutocompleteProps>;
} & EscapeHatchProps;
export declare type StocksSubCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: StocksSubCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stocksSubCategory?: StocksSubCategory;
    onSubmit?: (fields: StocksSubCategoryUpdateFormInputValues) => StocksSubCategoryUpdateFormInputValues;
    onSuccess?: (fields: StocksSubCategoryUpdateFormInputValues) => void;
    onError?: (fields: StocksSubCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StocksSubCategoryUpdateFormInputValues) => StocksSubCategoryUpdateFormInputValues;
    onValidate?: StocksSubCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StocksSubCategoryUpdateForm(props: StocksSubCategoryUpdateFormProps): React.ReactElement;
