import { AppThunkDispatch } from 'store/AppThunkDispatch';
import { MapStateToProps, MapDispatchToProps } from 'react-redux';
import { AppState } from 'store/RootReducer';

import {
  HomeStateToProps,
  HomeOwnProps,
  HomeDispatchToProps,
} from 'containers/Home/IHome';

import {
  topRatedStart as topRatedStartAction,
  searchStart as searchStartAction,
} from 'store/TVMovie/TVMovieThunkActions';

/**
 * @param {AppState} state
 * @param {HomeOwnProps} ownProps
 * @returns {HomeStateToProps}
 */
export const mapStateToProps: MapStateToProps<
  HomeStateToProps,
  HomeOwnProps,
  AppState
> = (state: AppState, ownProps: HomeOwnProps): HomeStateToProps => ({
  stateTvMovies: state.movies.tvMovies,
  loading: state.movies.loading,
  ...ownProps,
});

/**
 * @param {AppThunkDispatch} dispatch
 * @param {HomeOwnProps} ownProps
 * @returns {HomeDispatchToProps}
 */
export const mapDispatchToProps: MapDispatchToProps<
  HomeDispatchToProps,
  HomeOwnProps
> = (
  dispatch: AppThunkDispatch,
  ownProps: HomeOwnProps
): HomeDispatchToProps => ({
  topRatedStart: async (type: string) => dispatch(topRatedStartAction(type)),
  searchStart: async (query: string, searchType: string) =>
    dispatch(searchStartAction(query, searchType)),
});
