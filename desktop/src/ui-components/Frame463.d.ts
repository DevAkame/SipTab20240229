/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps } from "@aws-amplify/ui-react";
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
export declare type Frame463OverridesProps = {
    Frame463?: PrimitiveOverrideProps<FlexProps>;
    FirtProfileSetting?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type Frame463Props = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: Frame463OverridesProps | undefined | null;
}>;
export default function Frame463(props: Frame463Props): React.ReactElement;
