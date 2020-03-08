import React, { FC, memo, lazy, useEffect, useState, useCallback } from 'react';
import { connect } from 'react-redux';

// tvMovie interface
import { TVMovie } from 'store/TVMovie/TVMovieTypes';

// root redux store
import { AppState } from 'store/RootReducer';

// home ontainer props
import {
  HomeOwnProps,
  HomeDispatchToProps,
  HomeStateToProps,
  HomeAllProps,
} from 'containers/Home/IHome';

// redux props for home container
import {
  mapDispatchToProps,
  mapStateToProps,
} from 'containers/Home/HomeMapProps';

// custom hook
import useDebounce from 'shared/hooks/debounce';

// components
import HomeNavigation from 'components/homeNavigation/homeNavigation';
import Search from 'components/search/search';
import GridList from 'components/gridList/gridList';
import GridItemSuspense from 'components/suspense/gridItem/gridItemSuspense';

// css
import css from './Home.module.scss';

const GridItem = lazy(() => import('components/gridItem/gridItem'));

/**
 * @param {HomeAllProps} {
 *   text,
 *   tab,
 *   onTabChange,
 *   onTextChange,
 *   topRatedStart,
 *   searchStart,
 *   stateTvMovies,
 *   loading,
 * }
 * @returns {JSX.Element}
 */
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
            <GridItemSuspense key={value.id}>
              <GridItem value={value} type={tab} />
            </GridItemSuspense>
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
