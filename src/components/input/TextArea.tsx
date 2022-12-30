import classNames from 'classnames';
import { CommonProps } from 'types';
import CopyIcon from 'components/input/CopyIcon';
import { Field } from 'components/input/Field';
import styles from './TextArea.module.css';

export interface TextAreaProps extends CommonProps {
  name?: string;
  value?: string;
  defaultValue?: string;
  rows?: number;
  cols?: number;
  spellCheck?: boolean;
  readOnly?: boolean;
  disabled?: boolean;
  placeholder?: string;
  resizeable?: boolean;
  allowCopy?: boolean;
  onChange?: (value: string, e?: Event) => void;
}

export function TextArea(props: TextAreaProps) {
  const {
    name,
    value,
    defaultValue,
    rows,
    cols,
    spellCheck,
    readOnly,
    disabled,
    placeholder,
    resizeable = false,
    allowCopy = false,
    onChange,
    ...domProps
  } = props;

  const handleChange = e => {
    if (onChange) {
      onChange(e.target.value, e);
    }
  };

  return (
    <Field {...domProps} disabled={disabled} readOnly={readOnly}>
      <textarea
        className={classNames(styles.input, { [styles.copyable]: allowCopy })}
        style={{ resize: resizeable ? undefined : 'none' }}
        name={name}
        value={value}
        defaultValue={defaultValue}
        rows={rows}
        cols={cols}
        spellCheck={spellCheck}
        readOnly={readOnly}
        disabled={disabled}
        placeholder={placeholder}
        onChange={handleChange}
      />
      {allowCopy && <CopyIcon value={value} className={styles.icon} />}
    </Field>
  );
}

export default TextArea;
