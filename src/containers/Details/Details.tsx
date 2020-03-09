import React, { FC, useEffect, memo, useState } from 'react';
import { Link, useParams, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

// player for youtube videos
import ReactPlayer from 'react-player';

// root redux store
import { AppState } from 'store/RootReducer';

// props types for details container
import {
  DetailsDispatchToProps,
  DetailsStateToProps,
  DetailsAllProps,
} from 'containers/Details/IDetails';

// redux props for details containerr
import {
  mapStateToProps,
  mapDispatchToProps,
} from 'containers/Details/DetailsMapProps';

// tvMovieVideo type extends TVMovie adding aditional video property
import { TVMovieVideo } from 'store/TVMovie/TVMovieTypes';

import { ReactComponent as Icon } from 'assets/svgs/left-arrow.svg';

// css
import css from './Details.module.scss';

/**
 * @param {DetailsAllProps} {
 *   tvMovie,
 *   error,
 *   getTVMovieStart,
 * }
 * @returns {ReactElement}
 */
const Details: FC<DetailsAllProps> = ({
  tvMovie,
  error,
  getTVMovieStart,
}: DetailsAllProps): JSX.Element => {
  // type => 'tv' | 'movie'
  const { type, id } = useParams();

  const [TvMovie, setTvMovie] = useState<TVMovieVideo>({
    id: '',
    overview: '',
    title: '',
    img: '',
    video: '',
  });

  useEffect(() => {
    if (type && id) {
      getTVMovieStart(id, type);
    }
  }, [id, type, getTVMovieStart]);

  useEffect(() => {
    setTvMovie(tvMovie);
  }, [tvMovie]);

  return (
    <>
      {!error && TvMovie.id && (
        <main className={`container ${css.movie}`}>
          <div className={css.backButton}>
            <Icon />
            <Link to="/">Back</Link>
          </div>
          <section className={css.heroContentMovie}>
            {TvMovie.video ? (
              <ReactPlayer
                url={TvMovie.video}
                playing={false}
                height="450px"
                width="100%"
                controls
              />
            ) : (
              <img src={TvMovie.img} alt="movie-tv" />
            )}
          </section>
          <section className={css.detail}>
            <h1>{TvMovie.title}</h1>
            <div className={css.details}>
              <h2>Details</h2>
              <div className={css.content}>
                <p>{TvMovie.overview}</p>
              </div>
            </div>
          </section>
        </main>
      )}
      {error && <Redirect to="/" />}
    </>
  );
};

export default memo(
  connect<DetailsStateToProps, DetailsDispatchToProps, {}, AppState>(
    mapStateToProps,
    mapDispatchToProps
  )(Details)
);
