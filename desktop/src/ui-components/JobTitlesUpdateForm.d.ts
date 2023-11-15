/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { GridProps, TextFieldProps } from "@aws-amplify/ui-react";
import { JobTitles } from "../models";
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
export declare type JobTitlesUpdateFormInputValues = {
    name?: string;
};
export declare type JobTitlesUpdateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobTitlesUpdateFormOverridesProps = {
    JobTitlesUpdateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobTitlesUpdateFormProps = React.PropsWithChildren<{
    overrides?: JobTitlesUpdateFormOverridesProps | undefined | null;
} & {
    id?: string;
    jobTitles?: JobTitles;
    onSubmit?: (fields: JobTitlesUpdateFormInputValues) => JobTitlesUpdateFormInputValues;
    onSuccess?: (fields: JobTitlesUpdateFormInputValues) => void;
    onError?: (fields: JobTitlesUpdateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobTitlesUpdateFormInputValues) => JobTitlesUpdateFormInputValues;
    onValidate?: JobTitlesUpdateFormValidationValues;
} & React.CSSProperties>;
export default function JobTitlesUpdateForm(props: JobTitlesUpdateFormProps): React.ReactElement;
