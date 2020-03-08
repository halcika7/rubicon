import {
  getDataStart,
  getData,
  getTVMovieSuccess,
  getTVMovieFailed,
  getDataFailed,
} from 'store/TVMovie/TVMovieDispatchActions';

test('should setup getDataStart object', () => {
  const action = getDataStart();

  expect(action).toStrictEqual({ type: 'DATA_START' });
});

test('should setup getData object', () => {
  const data = [{ id: 1, title: 'sdnojfi', overview: '', img: '' }];
  const action = getData(data);

  expect(action).toStrictEqual({ type: 'DATA_SUCCESS', payload: data });
});

test('should setup getTVMovieSuccess object', () => {
  const data = { id: 1, title: 'sdnojfi', overview: '', img: '' };
  const action = getTVMovieSuccess(data, '');

  expect(action).toStrictEqual({
    type: 'TV_MOVIE_SUCCESS',
    payload: { ...data, video: '' },
  });
});

test('should setup getTVMovieFailed object', () => {
  const action = getTVMovieFailed('Error');

  expect(action).toStrictEqual({
    type: 'TV_MOVIE_FAILED',
    payload: 'Error',
  });
});

test('should setup getDataFailed object', () => {
  const action = getDataFailed('Error');

  expect(action).toStrictEqual({
    type: 'DATA_FAILED',
    payload: 'Error',
  });
});
