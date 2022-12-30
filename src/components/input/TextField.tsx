import { Ref, forwardRef, ChangeEventHandler, FocusEventHandler } from 'react';
import classNames from 'classnames';
import { CommonProps } from 'types';
import CopyIcon from 'components/input/CopyIcon';
import Field from 'components/input/Field';
import styles from './TextField.module.css';

export interface TextFieldProps extends CommonProps {
  name?: string;
  value?: string;
  type?: 'text' | 'password';
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  autoComplete?: string;
  allowCopy?: boolean;
  onChange?: ChangeEventHandler<HTMLInputElement>;
  onFocus?: FocusEventHandler<HTMLInputElement>;
}

function _TextField(props: TextFieldProps, ref?: Ref<any>) {
  const {
    name,
    value,
    type = 'text',
    spellCheck,
    readOnly,
    disabled,
    placeholder,
    autoComplete,
    allowCopy = false,
    onChange,
    onFocus,
    children,
    ...domProps
  } = props;

  return (
    <Field {...domProps} disabled={disabled} readOnly={readOnly}>
      <input
        type={type}
        ref={ref}
        className={classNames(styles.input)}
        name={name}
        value={value}
        spellCheck={spellCheck}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        onChange={onChange}
        autoComplete={autoComplete}
        onFocus={onFocus}
      />
      {children}
      {allowCopy && <CopyIcon value={value} className={styles.icon} />}
    </Field>
  );
}

export const TextField = forwardRef(_TextField);

export default TextField;
