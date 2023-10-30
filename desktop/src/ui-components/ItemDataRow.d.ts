/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type ItemDataRowOverridesProps = {
    ItemDataRow?: PrimitiveOverrideProps<FlexProps>;
    categolyName?: PrimitiveOverrideProps<TextProps>;
    subcategolyName?: PrimitiveOverrideProps<TextProps>;
    itemName?: PrimitiveOverrideProps<TextProps>;
    barcode38484965?: PrimitiveOverrideProps<TextProps>;
    barcode38484966?: PrimitiveOverrideProps<TextProps>;
    stockInt?: PrimitiveOverrideProps<TextProps>;
    limmitInt38474875?: PrimitiveOverrideProps<TextProps>;
    limmitInt38474881?: PrimitiveOverrideProps<TextProps>;
    limmitInt38485134?: PrimitiveOverrideProps<TextProps>;
    Suprime?: PrimitiveOverrideProps<TextProps>;
    brank?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type ItemDataRowProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ItemDataRowOverridesProps | undefined | null;
}>;
export default function ItemDataRow(props: ItemDataRowProps): React.ReactElement;
