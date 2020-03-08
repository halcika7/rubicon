import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

// interface for TV Show oor Movie
import { TVMovie } from 'store/TVMovie/TVMovieTypes';

// custom function used to truncate text if it's length > 30
import trunc from 'shared/truncText';

// css
import './gridItem.scss';

type GridItemProps = {
  value: TVMovie;
  type: string;
};

/**
 * @param {GridItemProps} {
 *   value,
 *   type,
 * }
 * @returns {JSX.Element}
 */
const gridItem: FC<GridItemProps> = ({
  value,
  type,
}: GridItemProps): JSX.Element => (
  <ReactCSSTransitionGroup
    transitionName="example"
    transitionEnterTimeout={500}
    transitionAppear
    transitionAppearTimeout={500}
    transitionEnter
    transitionLeaveTimeout={300}
  >
    <article className="gridItem" data-testid="grid-item">
      <div className="overlay">
        <Link to={`/details/${type}/${value.id}`}>Details</Link>
      </div>
      <div className="cover">
        <img src={value.img} alt={value.title} />
      </div>
      <h3 className="title">{trunc(value.title)}</h3>
    </article>
  </ReactCSSTransitionGroup>
);

export default gridItem;
