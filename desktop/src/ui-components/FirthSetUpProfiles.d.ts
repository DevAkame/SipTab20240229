/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { Sex, JobTitles, UserProfiles } from "../models";
import { ButtonProps, FlexProps, HeadingProps, IconProps, TextProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type FirthSetUpProfilesOverridesProps = {
    FirthSetUpProfiles?: PrimitiveOverrideProps<ViewProps>;
    "Frame 464"?: PrimitiveOverrideProps<FlexProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "SipTab\u3092\u3054\u5229\u7528\u9802\u304F\u305F\u3081\u306B\u6700\u521D\u306E\u8A2D\u5B9A\u3092\u304A\u9858\u3044\u3057\u307E\u3059\u3002\u8A2D\u5B9A\u304C\u6B63\u5E38\u306B\u5B8C\u4E86\u3059\u308B\u4E8B\u306B\u3088\u3063\u3066\u30A2\u30AB\u30A6\u30F3\u30C8\u4F5C\u6210\u306F\u5B8C\u6210\u3068\u306A\u308A\u307E\u3059\u3002"?: PrimitiveOverrideProps<TextProps>;
    Name?: PrimitiveOverrideProps<FlexProps>;
    "Name:"?: PrimitiveOverrideProps<TextProps>;
    "\uFF11\uFF12\uFF13\uFF14\uFF15\uFF16\uFF17"?: PrimitiveOverrideProps<TextProps>;
    "Frame 465"?: PrimitiveOverrideProps<FlexProps>;
    PhoneNum?: PrimitiveOverrideProps<FlexProps>;
    "Phone:"?: PrimitiveOverrideProps<TextProps>;
    "080-6555-9999"?: PrimitiveOverrideProps<TextProps>;
    Mails?: PrimitiveOverrideProps<FlexProps>;
    label40376249?: PrimitiveOverrideProps<TextProps>;
    addressfirld?: PrimitiveOverrideProps<TextProps>;
    "Frame 466"?: PrimitiveOverrideProps<FlexProps>;
    TextField40376395?: PrimitiveOverrideProps<FlexProps>;
    label40376396?: PrimitiveOverrideProps<TextProps>;
    InputGroup40376398?: PrimitiveOverrideProps<FlexProps>;
    Input40376399?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376400?: PrimitiveOverrideProps<TextProps>;
    TextField40376410?: PrimitiveOverrideProps<FlexProps>;
    label40376411?: PrimitiveOverrideProps<TextProps>;
    InputGroup40376413?: PrimitiveOverrideProps<FlexProps>;
    Input40376414?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376415?: PrimitiveOverrideProps<TextProps>;
    "Frame 467"?: PrimitiveOverrideProps<FlexProps>;
    TextField40376425?: PrimitiveOverrideProps<FlexProps>;
    label40376426?: PrimitiveOverrideProps<TextProps>;
    InputGroup40376428?: PrimitiveOverrideProps<FlexProps>;
    Input40376429?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376430?: PrimitiveOverrideProps<TextProps>;
    TextField40376439?: PrimitiveOverrideProps<FlexProps>;
    label40376440?: PrimitiveOverrideProps<TextProps>;
    InputGroup40376442?: PrimitiveOverrideProps<FlexProps>;
    Input40376443?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376444?: PrimitiveOverrideProps<TextProps>;
    SelectField40376646?: PrimitiveOverrideProps<FlexProps>;
    label40376647?: PrimitiveOverrideProps<TextProps>;
    InputGroup40376649?: PrimitiveOverrideProps<FlexProps>;
    "Frame 468"?: PrimitiveOverrideProps<FlexProps>;
    Input40376650?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376651?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon40376652"?: PrimitiveOverrideProps<IconProps>;
    label40376659?: PrimitiveOverrideProps<TextProps>;
    Input40376661?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376662?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon40376663"?: PrimitiveOverrideProps<IconProps>;
    label40376665?: PrimitiveOverrideProps<TextProps>;
    Input40376666?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376667?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon40376668"?: PrimitiveOverrideProps<IconProps>;
    label40376669?: PrimitiveOverrideProps<TextProps>;
    SelectField40376680?: PrimitiveOverrideProps<FlexProps>;
    label40376681?: PrimitiveOverrideProps<TextProps>;
    InputGroup40376683?: PrimitiveOverrideProps<FlexProps>;
    Input40376684?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376685?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon40376686"?: PrimitiveOverrideProps<IconProps>;
    SelectField40376698?: PrimitiveOverrideProps<FlexProps>;
    label40376699?: PrimitiveOverrideProps<TextProps>;
    InputGroup40376701?: PrimitiveOverrideProps<FlexProps>;
    Input40376702?: PrimitiveOverrideProps<FlexProps>;
    placeholder40376703?: PrimitiveOverrideProps<TextProps>;
    "\uD83D\uDD12Icon40376704"?: PrimitiveOverrideProps<IconProps>;
    Button?: PrimitiveOverrideProps<ButtonProps>;
} & EscapeHatchProps;
export declare type FirthSetUpProfilesProps = React.PropsWithChildren<Partial<ViewProps> & {
    sex?: Sex;
    jobTitles?: JobTitles;
    userProfiles?: UserProfiles;
} & {
    overrides?: FirthSetUpProfilesOverridesProps | undefined | null;
}>;
export default function FirthSetUpProfiles(props: FirthSetUpProfilesProps): React.ReactElement;
