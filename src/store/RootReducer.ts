import { combineReducers, Reducer } from 'redux';
import { tvMovieReducer, TVMovieState } from 'store/TVMovie/TVMovieReducer';

export interface AppState {
  movies: TVMovieState;
}

export const rootReducer: Reducer<AppState> = combineReducers<AppState>({
  movies: tvMovieReducer,
} as any);
