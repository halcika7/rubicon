import { tvMovieReducer } from 'store/TVMovie/TVMovieReducer';
import {
  topMovies as TopMovies,
  topTvShows as TopTvShows,
} from '__tests__/store/tvMovieData.test';

const startState = {
  tvMovies: [],
  tvMovie: { id: '', img: '', title: '', overview: '', video: '' },
  loading: true,
  error: '',
};

test('should setup default values', () => {
  const state = tvMovieReducer(undefined, { type: '@@INIT', payload: '' });

  expect(state).toStrictEqual({ ...startState });
});

test('should setup default values on action DATA_START', () => {
  const state = tvMovieReducer(startState, { type: 'DATA_START', payload: '' });

  expect(state).toEqual({ ...startState });
});

test('should setup values on action DATA_SUCCESS', () => {
  const payload = [{ id: '', img: '', title: '', overview: '' }];
  const topMovies = TopMovies;
  const topTvShows = TopTvShows;

  const state = tvMovieReducer(startState, {
    type: 'DATA_SUCCESS',
    payload,
  });

  // test after fetching top movies
  const state2 = tvMovieReducer(startState, {
    type: 'DATA_SUCCESS',
    payload: topMovies,
  });

  // test for top tv shows
  const state3 = tvMovieReducer(startState, {
    type: 'DATA_SUCCESS',
    payload: topTvShows,
  });

  expect(state).toStrictEqual({
    ...startState,
    tvMovies: payload,
    loading: false,
  });

  expect(state2).toStrictEqual({
    ...startState,
    tvMovies: topMovies,
    loading: false,
  });

  expect(state3).toStrictEqual({
    ...startState,
    tvMovies: topTvShows,
    loading: false,
  });
});

test('should setup values on action TV_MOVIE_SUCCESS', () => {
  const payload = { id: '', img: '', title: '', overview: '', video: '' };
  const payload2 = {
    id: 23,
    img: 'some image',
    title: 'some title',
    overview: 'some overview',
    video: '',
  };
  const state = tvMovieReducer(undefined, {
    type: 'TV_MOVIE_SUCCESS',
    payload,
  });

  const state2 = tvMovieReducer(startState, {
    type: 'TV_MOVIE_SUCCESS',
    payload: payload2,
  });

  // test to verify it's not equal to initial state
  expect(state).toStrictEqual({ ...startState });

  expect(state).toStrictEqual({ ...startState, tvMovie: payload });

  // test non default values
  // test to verify it's not equal to initial state
  expect(state2).not.toStrictEqual({ ...startState });

  expect(state2).toStrictEqual({ ...startState, tvMovie: payload2 });
});

test('should setup values on action TV_MOVIE_FAILED', () => {
  const payload = 'Not found error';
  const state = tvMovieReducer(undefined, {
    type: 'TV_MOVIE_FAILED',
    payload,
  });

  // test to verify it's not equal to initial state
  expect(state).not.toStrictEqual({ ...startState });

  expect(state).toStrictEqual({ ...startState, error: payload });
});
