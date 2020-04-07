import React, { FC, ReactNode } from 'react';

// css
import './gridList.scss';

type GridProps = {
  children: ReactNode;
};

const gridList: FC<GridProps> = ({ children }: GridProps): JSX.Element => (
  <section className="grid" data-testid="grid">
    {children}
  </section>
);

export default React.memo(gridList);
