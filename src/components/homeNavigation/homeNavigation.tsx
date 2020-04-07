import React, { FC } from 'react';

import Image from 'assets/images/movies.jpeg';

// css
import css from './homeNavigation.module.scss';

interface HomeNavigationProps {
  tab: string;
  onTabChange: (val: string) => void;
}

const HomeNavigation: FC<HomeNavigationProps> = ({
  tab,
  onTabChange,
}: HomeNavigationProps): JSX.Element => (
  <nav>
    <img src={Image} alt="hero-background" />
    <div className={css.overlay} />
    <button
      className={tab !== 'tv' ? css.active : ''}
      onClick={onTabChange.bind(null, 'movie')}
      type="button"
    >
      Movies
    </button>
    <button
      className={tab === 'tv' ? css.active : ''}
      onClick={onTabChange.bind(null, 'tv')}
      type="button"
    >
      TV Shows
    </button>
  </nav>
);

export default React.memo(HomeNavigation);
