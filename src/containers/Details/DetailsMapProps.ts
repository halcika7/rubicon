import { AppThunkDispatch } from 'store/AppThunkDispatch';
import { AppState } from 'store/RootReducer';
import {
  DetailsDispatchToProps,
  DetailsStateToProps,
} from 'containers/Details/IDetails';
import { MapStateToProps, MapDispatchToProps } from 'react-redux';

import { getTVMovieStart as getTVMovieStartAction } from 'store/TVMovie/TVMovieThunkActions';

/**
 * @param {AppState} state
 * @param {{}} ownProps
 * @returns {DetailsStateToProps}
 */
export const mapStateToProps: MapStateToProps<
  DetailsStateToProps,
  {},
  AppState
> = (state: AppState, ownProps: {}): DetailsStateToProps => ({
  tvMovie: state.movies.tvMovie,
  error: state.movies.error,
});

/**
 * @param {AppThunkDispatch} dispatch
 * @param {{}} ownProps
 * @returns {DetailsDispatchToProps}
 */
export const mapDispatchToProps: MapDispatchToProps<
  DetailsDispatchToProps,
  {}
> = (dispatch: AppThunkDispatch, ownProps: {}): DetailsDispatchToProps => ({
  getTVMovieStart: async (id: string, type: string) =>
    dispatch(getTVMovieStartAction(id, type)),
});
