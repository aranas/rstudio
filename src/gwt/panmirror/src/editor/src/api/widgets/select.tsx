/*
 * select.tsx
 *
 * Copyright (C) 2019-20 by RStudio, PBC
 *
 * Unless you have received this program directly from RStudio pursuant
 * to the terms of a commercial license agreement with RStudio, then
 * this program is licensed to you under the terms of version 3 of the
 * GNU Affero General Public License. This program is distributed WITHOUT
 * ANY EXPRESS OR IMPLIED WARRANTY, INCLUDING THOSE OF NON-INFRINGEMENT,
 * MERCHANTABILITY OR FITNESS FOR A PARTICULAR PURPOSE. Please refer to the
 * AGPL (http://www.gnu.org/licenses/agpl-3.0.txt) for more details.
 *
 */

import React, { ChangeEventHandler, ReactNode } from 'react';

import { WidgetProps } from './react';

export interface SelectInputProps extends WidgetProps {
  tabIndex?: number;
  className?: string;
  onChange?: ChangeEventHandler;
  children: ReactNode;
}

export const SelectInput = React.forwardRef<HTMLSelectElement, SelectInputProps>((props, ref) => {
  const style: React.CSSProperties = {
    ...props.style,
  };

  return (
    <select
      className={`pm-input-select pm-background-color pm-pane-border-color pm-text-color pm-background-color ${props.className}`}
      style={style}
      tabIndex={props.tabIndex}
      ref={ref}
      onChange={props.onChange}
    >
      {props.children}
    </select>
  );
});
