import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme';
import { BrowserRouter } from 'react-router-dom';

import { Home } from 'containers/Home/Home';
import { searchStart, topRatedStart } from 'store/TVMovie/TVMovieThunkActions';
import { topMovies, topTvShows } from '__tests__/store/tvMovieData.test';
import { render } from '@testing-library/react';

let text = '';
let tab = '';

const textOnChange = (value: string): void => {
  text = value;
};

const tabOnChange = (value: string): void => {
  tab = value;
};

const HomeComponent = (
  <BrowserRouter>
    <Home
      text={text}
      onTabChange={tabOnChange}
      onTextChange={textOnChange}
      tab={tab}
      stateTvMovies={topMovies}
      loading={false}
      topRatedStart={topRatedStart}
      searchStart={searchStart}
    />
  </BrowserRouter>
);

describe('<Home /> mounts', () => {
  it('should mount', () => {
    const main = document.createElement('main');
    ReactDOM.render(HomeComponent, main);
  });
});

describe('<Home /> renders components', () => {
  let getByTest: Function;
  let getByT: Function;

  beforeEach(() => {
    const { getByText, getByTestId } = render(HomeComponent);
    getByTest = getByTestId;
    getByT = getByText;
  });

  it('shoould render movies tab', () => {
    const moviesTab = getByT(/Movies/i);
    expect(moviesTab).toBeInTheDocument();
  });

  it('should render tv shows tab', () => {
    const tvTab = getByT(/TV Shows/i);
    expect(tvTab).toBeInTheDocument();
  });

  it('should render search', () => {
    const search = getByTest('search');
    expect(search).toBeInTheDocument();
  });

  it('should render grid', () => {
    const grid = getByTest('grid');
    expect(grid).toBeInTheDocument();
  });
});

describe('<Home />', () => {
  let wrapper: any;

  beforeEach(() => {
    wrapper = mount(HomeComponent);
  });

  it('should render 10 items', () => {
    wrapper.setProps({ tab: 'movies' });
    let gridl = wrapper.find('.container');
    let grid = gridl.find('.grid');
    let gridItems = gridl.find('.gridItem');
    expect(gridl.length).toBe(1);
    expect(grid.length).toBe(1);
    expect(gridItems.length).toBe(10);

    wrapper.setProps({ tab: 'tv', tvMovies: topTvShows });
    gridl = wrapper.find('.container');
    grid = gridl.find('.grid');
    gridItems = gridl.find('.gridItem');
    expect(gridl.length).toBe(1);
    expect(grid.length).toBe(1);
    expect(gridItems.length).toBe(10);
  });
});
