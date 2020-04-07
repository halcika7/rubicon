import axios from 'axios';
import { AppThunkDispatch } from 'store/AppThunkDispatch';

import {
  transformDataResponse,
  transformVideoResponse,
} from 'shared/transformResult';

import {
  getDataStart,
  getData,
  getDataFailed,
  getTVMovieSuccess,
  getTVMovieFailed,
} from 'store/TVMovie/TVMovieDispatchActions';

const axiosGetDataRequest = async (
  url: string,
  dispatch: AppThunkDispatch
): Promise<any> => {
  dispatch(getDataStart());

  try {
    const { data } = await axios.get(url);

    if (!data) {
      dispatch(getDataFailed('error'));
      return;
    }

    const arr = transformDataResponse(data.results);

    dispatch(getData(arr));
  } catch (error) {
    dispatch(getDataFailed(error));
  }
};

export const topRatedStart = (type: string) => async (
  dispatch: AppThunkDispatch
): Promise<void> => {
  const url = `${process.env.REACT_APP_MOVIE_URL}${type}/top_rated${process.env.REACT_APP_MOVIE_QUERY}&page=1`;

  axiosGetDataRequest(url, dispatch);
};

export const searchStart = (query: string, searchType: string) => async (
  dispatch: AppThunkDispatch
): Promise<void> => {
  const url = `${process.env.REACT_APP_MOVIE_URL}search/${searchType}${process.env.REACT_APP_MOVIE_QUERY}&query=${query}&page=1`;
  axiosGetDataRequest(url, dispatch);
};

export const getTVMovieStart = (id: string, type: string) => async (
  dispatch: AppThunkDispatch
): Promise<void> => {
  dispatch(getDataStart());
  const videoUrl = `${process.env.REACT_APP_MOVIE_URL}${type}/${id}/videos${process.env.REACT_APP_MOVIE_QUERY}`;

  const url = `${process.env.REACT_APP_MOVIE_URL}${type}/${id}${process.env.REACT_APP_MOVIE_QUERY}`;

  let video_url = '';
  let tvMovie;

  try {
    const rsp = await axios.get(url);
    [tvMovie] = transformDataResponse([rsp.data]);

    const { data: videoData } = await axios.get(videoUrl);
    video_url = transformVideoResponse(videoData.results);

    dispatch(getTVMovieSuccess(tvMovie, video_url));
  } catch (error) {
    if (!tvMovie) dispatch(getTVMovieFailed('Not Found'));
    else dispatch(getTVMovieSuccess(tvMovie, video_url));
  }
};
