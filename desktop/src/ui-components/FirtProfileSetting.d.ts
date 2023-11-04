/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, HeadingProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type FirtProfileSettingOverridesProps = {
    FirtProfileSetting?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    label?: PrimitiveOverrideProps<ViewProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Frame 462"?: PrimitiveOverrideProps<FlexProps>;
    MailAddress?: PrimitiveOverrideProps<FlexProps>;
    PhoneNum?: PrimitiveOverrideProps<FlexProps>;
    "Frame 456"?: PrimitiveOverrideProps<FlexProps>;
    UserID40356025?: PrimitiveOverrideProps<FlexProps>;
    UserID40356026?: PrimitiveOverrideProps<FlexProps>;
    "Frame 460"?: PrimitiveOverrideProps<FlexProps>;
    UserID40356027?: PrimitiveOverrideProps<FlexProps>;
    UserID40356028?: PrimitiveOverrideProps<FlexProps>;
    SelectBirthdays?: PrimitiveOverrideProps<FlexProps>;
    selectJender?: PrimitiveOverrideProps<FlexProps>;
    PostNum?: PrimitiveOverrideProps<FlexProps>;
    SelectJobType?: PrimitiveOverrideProps<FlexProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FirtProfileSettingProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FirtProfileSettingOverridesProps | undefined | null;
}>;
export default function FirtProfileSetting(props: FirtProfileSettingProps): React.ReactElement;
