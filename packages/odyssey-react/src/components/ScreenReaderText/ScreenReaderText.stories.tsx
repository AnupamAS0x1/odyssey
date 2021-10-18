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

import type { Story } from "@storybook/react";
import type { ComponentProps } from "react";
import { ScreenReaderText } from ".";

export default {
  title: `Utilities/ScreenReaderText`,
  component: ScreenReaderText,
};

const Template: Story<ComponentProps<typeof ScreenReaderText>> = ({
  children,
}) => (
  <p>
    The following content is visually hidden:{" "}
    <ScreenReaderText>{children}</ScreenReaderText>
  </p>
);

export const Default = Template.bind({});
Default.args = {
  children: "Hi! I'm accessible to screen readers!",
};
