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
export declare type SexUpdateFormInputValues = {
    name?: string;
};
export declare type SexUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type SexUpdateFormOverridesProps = {
    SexUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type SexUpdateFormProps = React.PropsWithChildren<{
    overrides?: SexUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    sex?: any;
    onSubmit?: (fields: SexUpdateFormInputValues) => SexUpdateFormInputValues;
    onSuccess?: (fields: SexUpdateFormInputValues) => void;
    onError?: (fields: SexUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: SexUpdateFormInputValues) => SexUpdateFormInputValues;
    onValidate?: SexUpdateFormValidationValues;
} & React.CSSProperties>;
export default function SexUpdateForm(props: SexUpdateFormProps): React.ReactElement;
