/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { ButtonProps, CheckboxFieldProps, FlexProps, IconProps, SelectFieldProps, TextFieldProps, TextProps } from "@aws-amplify/ui-react";
export declare type PrimitiveOverrideProps<T> = Partial<T> & React.DOMAttributes<HTMLDivElement>;
export declare type ContactUsOverridesProps = {
    ContactUs?: PrimitiveOverrideProps<FlexProps>;
    Button38485303?: PrimitiveOverrideProps<ButtonProps>;
    "..Add manual"?: PrimitiveOverrideProps<TextProps>;
    "Frame 443"?: PrimitiveOverrideProps<FlexProps>;
    Category?: PrimitiveOverrideProps<FlexProps>;
    SelectField384810047?: PrimitiveOverrideProps<SelectFieldProps>;
    SubCategory384810506?: PrimitiveOverrideProps<FlexProps>;
    SelectField384810507?: PrimitiveOverrideProps<SelectFieldProps>;
    TextField29766939?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38485745?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38485807?: PrimitiveOverrideProps<TextFieldProps>;
    CheckboxField29766940?: PrimitiveOverrideProps<CheckboxFieldProps>;
    "Frame 444"?: PrimitiveOverrideProps<FlexProps>;
    TextField38486002?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38486078?: PrimitiveOverrideProps<TextFieldProps>;
    CheckboxField38487724?: PrimitiveOverrideProps<CheckboxFieldProps>;
    SelectField388514573?: PrimitiveOverrideProps<FlexProps>;
    "\u274C388514574"?: PrimitiveOverrideProps<TextProps>;
    "Frame 442"?: PrimitiveOverrideProps<FlexProps>;
    InputGroup?: PrimitiveOverrideProps<FlexProps>;
    Input?: PrimitiveOverrideProps<FlexProps>;
    "\u274C388514578"?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon"?: PrimitiveOverrideProps<IconProps>;
    Button388514929?: PrimitiveOverrideProps<ButtonProps>;
    TextField38488822?: PrimitiveOverrideProps<TextFieldProps>;
    TextField38486161?: PrimitiveOverrideProps<TextFieldProps>;
    SubCategory388513142?: PrimitiveOverrideProps<FlexProps>;
    SelectField388513143?: PrimitiveOverrideProps<SelectFieldProps>;
    SubCategory388513776?: PrimitiveOverrideProps<FlexProps>;
    SelectField388513777?: PrimitiveOverrideProps<SelectFieldProps>;
    Button39353403?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type ContactUsProps = React.PropsWithChildren<Partial<FlexProps> & {
    overrides?: ContactUsOverridesProps | undefined | null;
}>;
export default function ContactUs(props: ContactUsProps): React.ReactElement;
