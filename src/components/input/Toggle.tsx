import React, { MutableRefObject, ReactElement, useRef } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import styles from './Toggle.module.css';

export interface ToggleProps extends CommonProps {
  name?: string;
  value?: string;
  size?: 'sm' | 'md' | 'lg';
  checked?: boolean;
  disabled?: boolean;
  onChecked?: (checked: boolean) => void;
}

export function Toggle(props: ToggleProps): ReactElement {
  const {
    name,
    value,
    size = 'md',
    checked,
    disabled,
    className,
    children,
    onChange,
    onChecked,
    ...domProps
  } = props;
  const ref = useRef() as MutableRefObject<HTMLInputElement>;

  const handleChange = e => {
    onChange?.(e);
    onChecked?.(e.target.checked);
  };

  return (
    <div
      {...domProps}
      className={classNames(styles.toggle, className, styles[`sise-${size}`], {
        [styles.checked]: checked,
        [styles.disabled]: disabled,
      })}
    >
      <div className={styles.switch} />
      <label className={styles.label}>{children}</label>
      <input
        type="checkbox"
        name={name}
        ref={ref}
        className={styles.input}
        value={value}
        checked={checked}
        disabled={disabled}
        onChange={handleChange}
      />
    </div>
  );
}

export default Toggle;
