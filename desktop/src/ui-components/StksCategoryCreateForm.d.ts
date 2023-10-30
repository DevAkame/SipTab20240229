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
export declare type StksCategoryCreateFormInputValues = {
    name?: string;
};
export declare type StksCategoryCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StksCategoryCreateFormOverridesProps = {
    StksCategoryCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StksCategoryCreateFormProps = React.PropsWithChildren<{
    overrides?: StksCategoryCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: StksCategoryCreateFormInputValues) => StksCategoryCreateFormInputValues;
    onSuccess?: (fields: StksCategoryCreateFormInputValues) => void;
    onError?: (fields: StksCategoryCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StksCategoryCreateFormInputValues) => StksCategoryCreateFormInputValues;
    onValidate?: StksCategoryCreateFormValidationValues;
} & React.CSSProperties>;
export default function StksCategoryCreateForm(props: StksCategoryCreateFormProps): React.ReactElement;
