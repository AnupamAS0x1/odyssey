/*!
 * Copyright (c) 2021-present, Okta, Inc. and/or its affiliates. All rights reserved.
 * The Okta software accompanied by this notice is provided pursuant to the Apache License, Version 2.0 (the "License.")
 *
 * You may obtain a copy of the License at http://www.apache.org/licenses/LICENSE-2.0.
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
 * WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *
 * See the License for the specific language governing permissions and limitations under the License.
 */

import type {
  ReactNode,
  ComponentProps,
  ComponentPropsWithoutRef,
} from "react";
import { forwardRef } from "react";

import { useCx, useOmit, withStyles } from "../../utils";
import { SortIcon, SortAscIcon, SortDescIcon } from "../Icon";
import { ScreenReaderText } from "../ScreenReaderText";

import styles from "./Table.module.scss";

export type TableSortDirections = "asc" | "desc" | "unsorted";

interface Props
  extends Omit<ComponentPropsWithoutRef<"button">, "style" | "className"> {
  children?: ReactNode;
  /**
   * Current sort direction shown in icon
   * @default unsorted
   */
  direction: TableSortDirections;
  /**
   * Title for the unsorted icon
   */
  unsortedIconTitle: string;
  /**
   * Title for the ascending sort icon
   */
  ascendingIconTitle: string;
  /**
   * Title for the descending sort icon
   */
  descendingIconTitle: string;
  /**
   * Screen read only text used as the call to action for the button
   */
  screenReaderCallToAction: string;
}

let TableSortButton = forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {
    children,
    direction = "unsorted",
    unsortedIconTitle,
    ascendingIconTitle,
    descendingIconTitle,
    screenReaderCallToAction,
    ...rest
  } = props;

  const componentClass = useCx(styles.sort, styles[`${direction}Direction`]);

  const omitProps = useOmit(rest);

  return (
    <button {...omitProps} ref={ref} className={componentClass}>
      {children}
      <span className={styles.sortIndicator}>
        {direction === "unsorted" && <SortIcon title={unsortedIconTitle} />}
        {direction === "asc" && <SortAscIcon title={ascendingIconTitle} />}
        {direction === "desc" && <SortDescIcon title={descendingIconTitle} />}
      </span>
      <ScreenReaderText>{screenReaderCallToAction}</ScreenReaderText>
    </button>
  );
});

TableSortButton.displayName = "TableSortButton";

TableSortButton = withStyles(styles)(TableSortButton);

type TableSortButtonProps = ComponentProps<typeof TableSortButton>;
export type { TableSortButtonProps as Props };

export default TableSortButton;
