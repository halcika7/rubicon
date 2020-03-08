import React, { ReactNode } from 'react';

// css
import css from './gridItemSuspense.module.scss';

type Props = {
  children: ReactNode;
};

/**
 * @param {Props} {
 *   children,
 * }
 * @returns {JSX.Element}
 */
const gridItemSuspense: React.FC<Props> = ({
  children,
}: Props): JSX.Element => (
  <React.Suspense
    fallback={
      <div className={css.gridItem}>
        <div className={css.Image} />
        <div className={css.Heading}>
          <span />
        </div>
      </div>
    }
  >
    {children}
  </React.Suspense>
);

export default gridItemSuspense;
