/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { BadgeProps, FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type FiltersOverridesProps = {
    Filters?: PrimitiveOverrideProps<FlexProps>;
    Categoly?: PrimitiveOverrideProps<TextProps>;
    "Frame 437"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 42438485074"?: PrimitiveOverrideProps<FlexProps>;
    Badge38485076?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485079?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485081?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485083?: PrimitiveOverrideProps<BadgeProps>;
    subCategoly?: PrimitiveOverrideProps<TextProps>;
    "Frame 438"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 42438485092"?: PrimitiveOverrideProps<FlexProps>;
    Badge38485093?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485094?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485095?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485096?: PrimitiveOverrideProps<BadgeProps>;
    purchase38485101?: PrimitiveOverrideProps<TextProps>;
    "Frame 439"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 42438485103"?: PrimitiveOverrideProps<FlexProps>;
    Badge38485104?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485105?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485106?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485107?: PrimitiveOverrideProps<BadgeProps>;
    purchase38485112?: PrimitiveOverrideProps<TextProps>;
    "Frame 441"?: PrimitiveOverrideProps<FlexProps>;
    "Frame 42438485124"?: PrimitiveOverrideProps<FlexProps>;
    Badge38485125?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485126?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485127?: PrimitiveOverrideProps<BadgeProps>;
    Badge38485128?: PrimitiveOverrideProps<BadgeProps>;
    "Free KeyWord"?: PrimitiveOverrideProps<TextProps>;
    "Frame 440"?: PrimitiveOverrideProps<FlexProps>;
    "\u3072\u3052\u8336"?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<FlexProps>;
    label?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type FiltersProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: FiltersOverridesProps | undefined | null;
}>;
export default function Filters(props: FiltersProps): React.ReactElement;
