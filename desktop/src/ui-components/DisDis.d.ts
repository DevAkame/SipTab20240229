/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type DisDisOverridesProps = {
    DisDis?: PrimitiveOverrideProps<ViewProps>;
    "\u696D\u52D9\u7D71\u5408\u7BA1\u7406\u30B5\u30FC\u30D3\u30B9SipTab\u306E\u30ED\u30B0\u30A4\u30F3\u30DA\u30FC\u30B8\u3068\u306A\u308A\u307E\u3059\u3002 \u5F53\u30A2\u30D7\u30EA\u306E\u8A73\u7D30\u306B\u3064\u3044\u3066\u306F\u4E0B\u8A18\u3092\u53C2\u7167\u304F\u3060\u3055\u3044\u3002"?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type DisDisProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DisDisOverridesProps | undefined | null;
}>;
export default function DisDis(props: DisDisProps): React.ReactElement;
