/*!
 * Copyright (c) 2023-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import { memo } from "react";

import { FormHelperText } from "@mui/material";

import { FieldComponentProps } from "./FieldComponentProps";
import type { AllowedProps } from "./AllowedProps";

export type FieldHintProps = {
  LinkComponent?: FieldComponentProps["HintLinkComponent"];
  id?: string;
  text: string;
} & AllowedProps;

const FieldHint = ({
  id,
  LinkComponent,
  testId,
  text,
  translate,
}: FieldHintProps) => {
  return (
    <FormHelperText data-se={testId} id={id} translate={translate}>
      {text}
      {LinkComponent && (
        <>
          <span>&nbsp;{LinkComponent}</span>
        </>
      )}
    </FormHelperText>
  );
};

const MemoizedFieldHint = memo(FieldHint);
MemoizedFieldHint.displayName = "FieldHint";

export { MemoizedFieldHint as FieldHint };
