import {
  TVMovie,
  TVMovieVideo,
  TVMovieActions,
  TVMovieActionTypes,
} from 'store/TVMovie/TVMovieTypes';

export interface TVMovieState {
  tvMovies: TVMovie[];
  tvMovie: TVMovieVideo;
  loading: boolean;
  error: string;
}

const INITIAL_STATE: TVMovieState = {
  tvMovies: [],
  tvMovie: { id: '', img: '', title: '', overview: '', video: '' },
  loading: true,
  error: '',
};

export function tvMovieReducer(
  prevState = INITIAL_STATE,
  action: TVMovieActionTypes
) {
  switch (action.type) {
    case TVMovieActions.DATA_START:
      return {
        ...INITIAL_STATE,
      };
    case TVMovieActions.DATA_SUCCESS:
      return {
        ...prevState,
        tvMovies: action.payload,
        loading: false,
      };
    case TVMovieActions.TV_MOVIE_SUCCESS:
      return {
        ...prevState,
        tvMovie: action.payload,
      };
    case TVMovieActions.TV_MOVIE_FAILED:
      return {
        ...prevState,
        error: action.payload,
      };
    default:
      return prevState;
  }
}
