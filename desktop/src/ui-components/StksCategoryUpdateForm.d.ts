/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { StksCategory } from "../models";
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
export declare type StksCategoryUpdateFormInputValues = {
    name?: string;
};
export declare type StksCategoryUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type StksCategoryUpdateFormOverridesProps = {
    StksCategoryUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type StksCategoryUpdateFormProps = React.PropsWithChildren<{
    overrides?: StksCategoryUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    stksCategory?: StksCategory;
    onSubmit?: (fields: StksCategoryUpdateFormInputValues) => StksCategoryUpdateFormInputValues;
    onSuccess?: (fields: StksCategoryUpdateFormInputValues) => void;
    onError?: (fields: StksCategoryUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: StksCategoryUpdateFormInputValues) => StksCategoryUpdateFormInputValues;
    onValidate?: StksCategoryUpdateFormValidationValues;
} & React.CSSProperties>;
export default function StksCategoryUpdateForm(props: StksCategoryUpdateFormProps): React.ReactElement;
