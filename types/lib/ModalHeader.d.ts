import * as React from 'react';
import { CSSModule } from './utils';

export interface ModalHeaderProps extends React.HTMLAttributes<HTMLElement> {
  [key: string]: any;
  tag?: React.ElementType;
  cssModule?: CSSModule;
  wrapTag?: React.ElementType;
  toggle?: React.MouseEventHandler<any>;
}

declare class ModalHeader extends React.Component<ModalHeaderProps> {}
export default ModalHeader;
