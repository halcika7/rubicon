import React, { FC } from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as Icon } from 'assets/svgs/Movie.svg';

// css
import css from './navBar.module.scss';

const navBar: FC = (): JSX.Element => (
  <header className={css.header} data-testid="navheader">
    <div className={`container ${css.navbar}`}>
      <div className={css.image}>
        <Icon />
      </div>
      <Link to="/">Movie Search App</Link>
    </div>
  </header>
);

export default navBar;
