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
export declare type IconSetting64OverridesProps = {
    IconSetting64?: PrimitiveOverrideProps<ViewProps>;
    IconSetting6439363228?: IconSetting128Props;
} & EscapeHatchProps;
export declare type IconSetting64Props = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: IconSetting64OverridesProps | undefined | null;
}>;
export default function IconSetting64(props: IconSetting64Props): React.ReactElement;
