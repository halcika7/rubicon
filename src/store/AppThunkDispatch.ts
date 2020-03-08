import { ThunkDispatch } from 'redux-thunk';
import { AnyAction } from 'redux';

export type AppThunkDispatch = ThunkDispatch<{}, {}, AnyAction>;
