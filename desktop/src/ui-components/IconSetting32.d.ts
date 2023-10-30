/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconSetting128Props } from "./IconSetting128";
import { ViewProps } from "@aws-amplify/ui-react";
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
export declare type IconSetting32OverridesProps = {
    IconSetting32?: PrimitiveOverrideProps<ViewProps>;
    IconSetting3239363231?: IconSetting128Props;
} & EscapeHatchProps;
export declare type IconSetting32Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconSetting32OverridesProps | undefined | null;
}>;
export default function IconSetting32(props: IconSetting32Props): React.ReactElement;
