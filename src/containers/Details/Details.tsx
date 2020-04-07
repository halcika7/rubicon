import { ReactComponent as Icon } from 'assets/svgs/left-arrow.svg';
// redux props for details containerr
import {
  mapDispatchToProps,
  mapStateToProps,
} from 'containers/Details/DetailsMapProps';
// props types for details container
import {
  DetailsAllProps,
  DetailsDispatchToProps,
  DetailsStateToProps,
} from 'containers/Details/IDetails';
import React, { FC, memo, useEffect, useState } from 'react';
// player for youtube videos
import ReactPlayer from 'react-player';
import { connect } from 'react-redux';
import { Link, Redirect, useParams } from 'react-router-dom';
// root redux store
import { AppState } from 'store/RootReducer';
// tvMovieVideo type extends TVMovie adding aditional video property
import { TVMovieVideo } from 'store/TVMovie/TVMovieTypes';
// css
import css from './Details.module.scss';

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
                url={`https://${TvMovie.video}&origin=https://localhost:3000'`}
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
