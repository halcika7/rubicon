import {
  TVMovie,
  TVMovieActions,
  TVMovieActionTypes,
} from 'store/TVMovie/TVMovieTypes';

export const getDataStart = () => ({
  type: TVMovieActions.DATA_START,
});

export const getData = (data: TVMovie[]): TVMovieActionTypes => ({
  type: TVMovieActions.DATA_SUCCESS,
  payload: data,
});

export const getTVMovieSuccess = (
  data: TVMovie,
  video: string
): TVMovieActionTypes => ({
  type: TVMovieActions.TV_MOVIE_SUCCESS,
  payload: { ...data, video },
});

export const getTVMovieFailed = (error: string): TVMovieActionTypes => ({
  type: TVMovieActions.TV_MOVIE_FAILED,
  payload: error,
});

export const getDataFailed = (error: string): TVMovieActionTypes => ({
  type: TVMovieActions.DATA_FAILED,
  payload: error,
});
