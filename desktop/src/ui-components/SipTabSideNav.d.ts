/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { FlexProps, ImageProps, TextProps } from "@aws-amplify/ui-react";
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
export declare type SipTabSideNavOverridesProps = {
    SipTabSideNav?: PrimitiveOverrideProps<FlexProps>;
    SipTabSideNaveCard4290258?: PrimitiveOverrideProps<FlexProps>;
    image4290259?: PrimitiveOverrideProps<ImageProps>;
    label4290260?: PrimitiveOverrideProps<TextProps>;
    label4289203?: PrimitiveOverrideProps<TextProps>;
    SipTabSideNaveCard4290242?: PrimitiveOverrideProps<FlexProps>;
    image4290243?: PrimitiveOverrideProps<ImageProps>;
    label4290244?: PrimitiveOverrideProps<TextProps>;
    SipTabSideNaveCard4290236?: PrimitiveOverrideProps<FlexProps>;
    image4290237?: PrimitiveOverrideProps<ImageProps>;
    label4290238?: PrimitiveOverrideProps<TextProps>;
    SipTabSideNaveCard4290245?: PrimitiveOverrideProps<FlexProps>;
    image4290246?: PrimitiveOverrideProps<ImageProps>;
    label4290247?: PrimitiveOverrideProps<TextProps>;
    label4289210?: PrimitiveOverrideProps<TextProps>;
    SipTabSideNaveCard4290248?: PrimitiveOverrideProps<FlexProps>;
    image4290249?: PrimitiveOverrideProps<ImageProps>;
    label4290250?: PrimitiveOverrideProps<TextProps>;
    SipTabSideNaveCard4290233?: PrimitiveOverrideProps<FlexProps>;
    image4290234?: PrimitiveOverrideProps<ImageProps>;
    label4290235?: PrimitiveOverrideProps<TextProps>;
    label4289217?: PrimitiveOverrideProps<TextProps>;
    SipTabSideNaveCard4290251?: PrimitiveOverrideProps<FlexProps>;
    image4290252?: PrimitiveOverrideProps<ImageProps>;
    label4290253?: PrimitiveOverrideProps<TextProps>;
    SipTabSideNaveCard4290239?: PrimitiveOverrideProps<FlexProps>;
    image4290240?: PrimitiveOverrideProps<ImageProps>;
    label4290241?: PrimitiveOverrideProps<TextProps>;
} & EscapeHatchProps;
export declare type SipTabSideNavProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: SipTabSideNavOverridesProps | undefined | null;
}>;
export default function SipTabSideNav(props: SipTabSideNavProps): React.ReactElement;
