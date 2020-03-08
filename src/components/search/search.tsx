import React, { FC } from 'react';

import { ReactComponent as Icon } from 'assets/svgs/search.svg';

// css
import css from './search.module.scss';

interface SearchProps {
  text: string;
  onTextChange: (val: string) => void;
}

/**
 * @param {SearchProps} {
 *   text,
 *   onTextChange,
 * }
 * @returns {JSX.Element}
 */
const search: FC<SearchProps> = ({
  text,
  onTextChange,
}: SearchProps): JSX.Element => (
  <section className={css.form}>
    <div className={css.inputGroup}>
      <label htmlFor="search">
        <span>Search label</span>
        <input
          data-testid="search"
          type="text"
          name="searchInput"
          id="search"
          placeholder="Search"
          maxLength={50}
          value={text}
          onChange={e => onTextChange(e.target.value)}
          autoComplete="off"
        />
      </label>
      <Icon />
    </div>
  </section>
);

export default search;
