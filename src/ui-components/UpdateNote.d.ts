/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

import * as React from "react";
import { EscapeHatchProps } from "@aws-amplify/ui-react/internal";
import { Notes } from "../models";
import { FlexProps } from "@aws-amplify/ui-react";
export declare type UpdateNoteProps = React.PropsWithChildren<Partial<FlexProps> & {
    notes?: Notes;
} & {
    overrides?: EscapeHatchProps | undefined | null;
}>;
export default function UpdateNote(props: UpdateNoteProps): React.ReactElement;
