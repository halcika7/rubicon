import GridItem from 'components/gridItem/gridItem';
import GridList from 'components/gridList/gridList';
// components
import HomeNavigation from 'components/homeNavigation/homeNavigation';
import Search from 'components/search/search';
// redux props for home container
import {
  mapDispatchToProps,
  mapStateToProps,
} from 'containers/Home/HomeMapProps';
// home ontainer props
import {
  HomeAllProps,
  HomeDispatchToProps,
  HomeOwnProps,
  HomeStateToProps,
} from 'containers/Home/IHome';
import React, { FC, memo, useCallback, useEffect, useState } from 'react';
import { connect } from 'react-redux';
// custom hook
import useDebounce from 'shared/hooks/debounce';
// root redux store
import { AppState } from 'store/RootReducer';
// tvMovie interface
import { TVMovie } from 'store/TVMovie/TVMovieTypes';
// css
import css from './Home.module.scss';

export const Home: FC<HomeAllProps> = ({
  text,
  tab,
  onTabChange,
  onTextChange,
  topRatedStart,
  searchStart,
  stateTvMovies,
  loading,
}: HomeAllProps): JSX.Element => {
  const [tvMovies, setTvMovies] = useState<TVMovie[]>([]);

  const [loaded, setLoaded] = useState<boolean>(false);

  const [isSearching, setIsSearching] = useState<boolean>(true);

  const [length, setLength] = useState<number>(0);

  const debouncedSearchTerm = useDebounce(text, 1000);

  const setElements = useCallback(() => {
    if (debouncedSearchTerm.length === length && length !== 0) return;

    setLength(debouncedSearchTerm.length);

    if (debouncedSearchTerm.length < 3 && isSearching) {
      setIsSearching(false);
      topRatedStart(tab);
    } else if (debouncedSearchTerm.length > 2) {
      setIsSearching(true);
      searchStart(debouncedSearchTerm, tab);
    }
  }, [
    debouncedSearchTerm,
    tab,
    searchStart,
    isSearching,
    topRatedStart,
    length,
  ]);

  useEffect(() => {
    setTvMovies(stateTvMovies);
  }, [stateTvMovies]);

  useEffect(() => {
    setElements();
  }, [setElements]);

  useEffect(() => {
    setLength(-1);
    setIsSearching(true);
  }, [tab]);

  useEffect(() => {
    setLoaded(!loading);
  }, [loading]);

  return (
    <main className={`container ${css.home}`}>
      <HomeNavigation tab={tab} onTabChange={onTabChange} />
      <Search text={text} onTextChange={onTextChange} />
      <GridList>
        {loaded &&
          tvMovies.length > 0 &&
          tvMovies.map(value => (
            <GridItem key={value.id} value={value} type={tab} />
          ))}
      </GridList>
      {loaded && !tvMovies.length && (
        <span className={css.nothingFound}>Nothing found</span>
      )}
    </main>
  );
};

export default memo(
  connect<HomeStateToProps, HomeDispatchToProps, HomeOwnProps, AppState>(
    mapStateToProps,
    mapDispatchToProps
  )(Home)
);
