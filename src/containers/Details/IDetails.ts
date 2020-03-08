import { TVMovieVideo } from 'store/TVMovie/TVMovieTypes';

export interface DetailsDispatchToProps {
  getTVMovieStart: (id: string, type: string) => void;
}

export interface DetailsStateToProps {
  tvMovie: TVMovieVideo;
  error: string;
}

export type DetailsAllProps = DetailsStateToProps & DetailsDispatchToProps;
