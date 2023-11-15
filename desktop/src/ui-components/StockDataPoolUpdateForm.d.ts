/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, SelectFieldProps, TextAreaFieldProps, TextFieldProps } from "@aws-amplify/ui-react";
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
export declare type StockDataPoolUpdateFormInputValues = {
    category?: string;
    itemName?: string;
    barcode?: number;
    expiration?: string;
    stockInt?: number;
    limitInt?: number;
    status?: string;
    value?: number;
    purchaseID?: string;
    untitledfield?: string;
};
export declare type StockDataPoolUpdateFormValidationValues = {
    category?: ValidationFunction<string>;
    itemName?: ValidationFunction<string>;
    barcode?: ValidationFunction<number>;
    expiration?: ValidationFunction<string>;
    stockInt?: ValidationFunction<number>;
    limitInt?: ValidationFunction<number>;
    status?: ValidationFunction<string>;
    value?: ValidationFunction<number>;
    purchaseID?: ValidationFunction<string>;
    untitledfield?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StockDataPoolUpdateFormOverridesProps = {
    StockDataPoolUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    category?: PrimitiveOverrideProps<TextFieldProps>;
    itemName?: PrimitiveOverrideProps<TextFieldProps>;
    barcode?: PrimitiveOverrideProps<TextFieldProps>;
    expiration?: PrimitiveOverrideProps<TextAreaFieldProps>;
    stockInt?: PrimitiveOverrideProps<TextFieldProps>;
    limitInt?: PrimitiveOverrideProps<TextFieldProps>;
    status?: PrimitiveOverrideProps<SelectFieldProps>;
    value?: PrimitiveOverrideProps<TextFieldProps>;
    purchaseID?: PrimitiveOverrideProps<TextFieldProps>;
    untitledfield?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StockDataPoolUpdateFormProps = React.PropsWithChildren<{
    overrides?: StockDataPoolUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stockDataPool?: StockDataPool;
    onSubmit?: (fields: StockDataPoolUpdateFormInputValues) => StockDataPoolUpdateFormInputValues;
    onSuccess?: (fields: StockDataPoolUpdateFormInputValues) => void;
    onError?: (fields: StockDataPoolUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StockDataPoolUpdateFormInputValues) => StockDataPoolUpdateFormInputValues;
    onValidate?: StockDataPoolUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StockDataPoolUpdateForm(props: StockDataPoolUpdateFormProps): React.ReactElement;
