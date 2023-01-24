import { ReactElement, useState, useEffect } from 'react';
import classNames from 'classnames';
import TextField, { TextFieldProps } from 'components/input/TextField';
import Icon from 'components/common/Icon';
import useDebounce from 'hooks/useDebounce';
import { Search, Close } from 'components/icons';
import styles from './SearchField.module.css';

export interface SearchProps extends TextFieldProps {
  delay?: number;
}

export function SearchField(props: SearchProps): ReactElement {
  const { delay = 0, value, onChange, ...fieldProps } = props;
  const [search, setSearch] = useState(value);
  const searchValue = useDebounce(search, delay);

  const handleChange = e => {
    setSearch(e.target.value);

    if (delay === 0) {
      if (onChange) {
        onChange(e.target.value);
      }
    }
  };

  const resetSearch = () => setSearch('');

  useEffect(() => {
    if (delay > 0 && searchValue) {
      if (onChange) {
        onChange(searchValue);
      }
    }
  }, [searchValue]);

  return (
    <TextField {...fieldProps} value={search} onChange={handleChange}>
      <Icon size="sm" className={classNames(styles.icon, styles.magnifier)}>
        <Search />
      </Icon>
      <Icon
        size="sm"
        className={classNames(styles.icon, styles.close, { [styles.visible]: search })}
        onClick={resetSearch}
      >
        <Close />
      </Icon>
    </TextField>
  );
}

export default SearchField;
