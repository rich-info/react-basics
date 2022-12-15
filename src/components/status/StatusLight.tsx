import { ReactNode } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
// eslint-disable-next-line css-modules/no-unused-class
import styles from './StatusLight.module.css';

export interface StatusLightProps extends CommonProps {
  color?: string;
  variant: 'success' | 'warning' | 'error' | 'active';
  children?: ReactNode;
}

export function StatusLight(props: StatusLightProps) {
  const { color, variant, children, className, ...domProps } = props;

  return (
    <div {...domProps} className={classNames(styles.statuslight, className)}>
      <div
        className={classNames(styles.status, styles[variant])}
        style={{ backgroundColor: color }}
      />
      {children}
    </div>
  );
}
