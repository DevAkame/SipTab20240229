/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { ButtonProps, FlexProps, HeadingProps, ViewProps } from "@aws-amplify/ui-react";
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
export declare type DataAddOverridesProps = {
    DataAdd?: PrimitiveOverrideProps<ViewProps>;
    Heading?: PrimitiveOverrideProps<HeadingProps>;
    "Frame 456"?: PrimitiveOverrideProps<FlexProps>;
    BtnScanbarcode?: PrimitiveOverrideProps<ButtonProps>;
    BtnManualSetting?: PrimitiveOverrideProps<ButtonProps>;
    BtnImportFile?: PrimitiveOverrideProps<ButtonProps>;
    InputDataRow?: PrimitiveOverrideProps<FlexProps>;
    InputDataArea?: PrimitiveOverrideProps<FlexProps>;
    ImportDataFooderBtns?: PrimitiveOverrideProps<FlexProps>;
    DataAddHeader?: PrimitiveOverrideProps<FlexProps>;
} & EscapeHatchProps;
export declare type DataAddProps = React.PropsWithChildren<Partial<ViewProps> & {
    overrides?: DataAddOverridesProps | undefined | null;
}>;
export default function DataAdd(props: DataAddProps): React.ReactElement;
