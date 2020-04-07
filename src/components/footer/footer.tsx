import React, { FC } from 'react';
import { ReactComponent as Icon } from 'assets/svgs/Heart.svg';

// css
import css from './footer.module.scss';

const footer: FC = (): JSX.Element => (
  <footer className={css.footer} data-testid="footer">
    Made with
    <Icon />
    by Haris Bešlić
  </footer>
);

export default React.memo(footer);
