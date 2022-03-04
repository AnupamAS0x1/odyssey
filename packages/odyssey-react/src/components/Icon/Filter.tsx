/*!
 * Copyright (c) 2022-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

// Code automatically generated by svgr; DO NOT EDIT.

import React, { forwardRef } from "react";
import { useOmit } from "../../utils";
import { SvgIcon } from "./SvgIcon";
import type { SvgIconNoChildrenProps } from "./types";

export type FilterIconProps = SvgIconNoChildrenProps;

export const FilterIcon = forwardRef<SVGSVGElement, FilterIconProps>(
  (props, ref) => {
    const omitProps = useOmit(props);
    return (
      <SvgIcon ref={ref} {...omitProps}>
        <svg viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M1 2H15V3H1V2ZM3 6H13V7H3V6ZM11 10H5V11H11V10ZM7 14H9V15H7V14Z"
            fill="currentColor"
          />
        </svg>
      </SvgIcon>
    );
  }
);

FilterIcon.displayName = "FilterIcon";