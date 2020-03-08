export interface TVMovie {
  id: number | string;
  img: string;
  title: string;
  overview: string;
}

export interface TVMovieVideo extends TVMovie {
  video: string;
}

export const TVMovieActions = {
  DATA_START: 'DATA_START',
  DATA_SUCCESS: 'DATA_SUCCESS',
  DATA_FAILED: 'DATA_FAILED',
  TV_MOVIE_SUCCESS: 'TV_MOVIE_SUCCESS',
  TV_MOVIE_FAILED: 'TV_MOVIE_FAILED',
};

interface DataSuccess {
  type: typeof TVMovieActions.DATA_SUCCESS;
  payload: TVMovie[];
}

interface DataFailed {
  type: typeof TVMovieActions.DATA_FAILED;
  payload: string;
}

interface TVMovieSuccess {
  type: typeof TVMovieActions.TV_MOVIE_SUCCESS;
  payload: TVMovieVideo;
}

interface TVMovieFailed {
  type: typeof TVMovieActions.TV_MOVIE_FAILED;
  payload: string;
}

export type TVMovieActionTypes =
  | DataSuccess
  | DataFailed
  | TVMovieSuccess
  | TVMovieFailed;
