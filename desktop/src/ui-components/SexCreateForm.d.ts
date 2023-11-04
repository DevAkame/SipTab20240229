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
export declare type SexCreateFormInputValues = {
    name?: string;
};
export declare type SexCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SexCreateFormOverridesProps = {
    SexCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SexCreateFormProps = React.PropsWithChildren<{
    overrides?: SexCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: SexCreateFormInputValues) => SexCreateFormInputValues;
    onSuccess?: (fields: SexCreateFormInputValues) => void;
    onError?: (fields: SexCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SexCreateFormInputValues) => SexCreateFormInputValues;
    onValidate?: SexCreateFormValidationValues;
} & React.CSSProperties>;
export default function SexCreateForm(props: SexCreateFormProps): React.ReactElement;
