/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, HeadingProps } from "@aws-amplify/ui-react";
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
export declare type NavBarHeaderPoolsOverridesProps = {
    NavBarHeaderPools?: PrimitiveOverrideProps<FlexProps>;
    Heading39232799?: PrimitiveOverrideProps<HeadingProps>;
    Heading39232825?: PrimitiveOverrideProps<HeadingProps>;
    Heading39232827?: PrimitiveOverrideProps<HeadingProps>;
    Heading39232831?: PrimitiveOverrideProps<HeadingProps>;
    Heading39232829?: PrimitiveOverrideProps<HeadingProps>;
} & EscapeHatchProps;
export declare type NavBarHeaderPoolsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: NavBarHeaderPoolsOverridesProps | undefined | null;
}>;
export default function NavBarHeaderPools(props: NavBarHeaderPoolsProps): React.ReactElement;
