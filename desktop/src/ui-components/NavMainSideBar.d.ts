/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { IconPool32Props } from "./IconPool32";
import { DividerProps, FlexProps } from "@aws-amplify/ui-react";
import { IconSetting128Props } from "./IconSetting128";
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
export declare type NavMainSideBarOverridesProps = {
    NavMainSideBar?: PrimitiveOverrideProps<FlexProps>;
    IconPool32?: IconPool32Props;
    "Frame 455"?: PrimitiveOverrideProps<FlexProps>;
    Divider?: PrimitiveOverrideProps<DividerProps>;
    IconSetting32?: IconSetting128Props;
} & EscapeHatchProps;
export declare type NavMainSideBarProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavMainSideBarOverridesProps | undefined | null;
}>;
export default function NavMainSideBar(props: NavMainSideBarProps): React.ReactElement;
