import {
  TVMovie,
  TVMovieActions,
  TVMovieActionTypes,
} from 'store/TVMovie/TVMovieTypes';

export const getDataStart = () => ({
  type: TVMovieActions.DATA_START,
});

/**
 * @param {TVMovie[]} data
 * @returns {TVMovieActionTypes}
 */
export const getData = (data: TVMovie[]): TVMovieActionTypes => ({
  type: TVMovieActions.DATA_SUCCESS,
  payload: data,
});

/**
 * @param {TVMovie} data
 * @param {string} video
 * @returns {TVMovieActionTypes}
 */
export const getTVMovieSuccess = (
  data: TVMovie,
  video: string
): TVMovieActionTypes => ({
  type: TVMovieActions.TV_MOVIE_SUCCESS,
  payload: { ...data, video },
});

/**
 * @param {string} error
 * @returns {TVMovieActionTypes}
 */
export const getTVMovieFailed = (error: string): TVMovieActionTypes => ({
  type: TVMovieActions.TV_MOVIE_FAILED,
  payload: error,
});

/**
 * @param {string} error
 * @returns {TVMovieActionTypes}
 */
export const getDataFailed = (error: string): TVMovieActionTypes => ({
  type: TVMovieActions.DATA_FAILED,
  payload: error,
});
