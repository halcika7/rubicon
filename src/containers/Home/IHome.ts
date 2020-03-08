import { TVMovie } from 'store/TVMovie/TVMovieTypes';

export interface HomeOwnProps {
  text: string;
  tab: string;
  onTextChange: (val: string) => void;
  onTabChange: (val: string) => void;
}

export interface HomeDispatchToProps {
  topRatedStart: (type: string) => void;
  searchStart: (query: string, searchType: string) => void;
}

export interface HomeStateToProps {
  stateTvMovies: TVMovie[];
  loading: boolean;
}

export type HomeAllProps = HomeStateToProps &
  HomeDispatchToProps &
  HomeOwnProps;
