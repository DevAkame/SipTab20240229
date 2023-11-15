/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { StockDataPool, StocksSubCategory, StksCategory } from "../models";
import { ButtonProps, FlexProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type DataRowOverridesProps = {
    DataRow?: PrimitiveOverrideProps<FlexProps>;
    categolys?: PrimitiveOverrideProps<TextProps>;
    subcategolys?: PrimitiveOverrideProps<TextProps>;
    itemName38474890?: PrimitiveOverrideProps<TextProps>;
    itemName38484967?: PrimitiveOverrideProps<TextProps>;
    itemName38484968?: PrimitiveOverrideProps<TextProps>;
    "Frame 445"?: PrimitiveOverrideProps<FlexProps>;
    stockInt?: PrimitiveOverrideProps<TextProps>;
    countUpIcon?: PrimitiveOverrideProps<FlexProps>;
    Group388915750?: PrimitiveOverrideProps<ViewProps>;
    Vector388915751?: PrimitiveOverrideProps<IconProps>;
    Vector388915752?: PrimitiveOverrideProps<IconProps>;
    "\uD83E\uDD86 icon \"arrow down 1\""?: PrimitiveOverrideProps<FlexProps>;
    Group388916086?: PrimitiveOverrideProps<ViewProps>;
    Vector388916087?: PrimitiveOverrideProps<IconProps>;
    Vector388916088?: PrimitiveOverrideProps<IconProps>;
    limitInt?: PrimitiveOverrideProps<TextProps>;
    statusStr38474894?: PrimitiveOverrideProps<TextProps>;
    statusStr38485135?: PrimitiveOverrideProps<TextProps>;
    statusStr38485016?: PrimitiveOverrideProps<TextProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type DataRowProps = React.PropsWithChildren<Partial<FlexProps> & {
    stockDataPool?: StockDataPool;
    stocksSubCategory?: StocksSubCategory;
    stksCategory?: StksCategory;
} & {
    overrides?: DataRowOverridesProps | undefined | null;
}>;
export default function DataRow(props: DataRowProps): React.ReactElement;
