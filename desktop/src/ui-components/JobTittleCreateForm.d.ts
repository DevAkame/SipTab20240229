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
export declare type JobTittleCreateFormInputValues = {
    name?: string;
};
export declare type JobTittleCreateFormValidationValues = {
    name?: ValidationFunction<string>;
};
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type JobTittleCreateFormOverridesProps = {
    JobTittleCreateFormGrid?: PrimitiveOverrideProps<GridProps>;
    name?: PrimitiveOverrideProps<TextFieldProps>;
} & EscapeHatchProps;
export declare type JobTittleCreateFormProps = React.PropsWithChildren<{
    overrides?: JobTittleCreateFormOverridesProps | undefined | null;
} & {
    clearOnSuccess?: boolean;
    onSubmit?: (fields: JobTittleCreateFormInputValues) => JobTittleCreateFormInputValues;
    onSuccess?: (fields: JobTittleCreateFormInputValues) => void;
    onError?: (fields: JobTittleCreateFormInputValues, errorMessage: string) => void;
    onChange?: (fields: JobTittleCreateFormInputValues) => JobTittleCreateFormInputValues;
    onValidate?: JobTittleCreateFormValidationValues;
} & React.CSSProperties>;
export default function JobTittleCreateForm(props: JobTittleCreateFormProps): React.ReactElement;
