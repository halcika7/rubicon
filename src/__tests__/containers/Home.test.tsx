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

test('mounts', () => {
  const main = document.createElement('main');
  ReactDOM.render(HomeComponent, main);
});

test('check if components are rendered in home container', () => {
  const { getByText, getByTestId } = render(HomeComponent);
  const moviesTab = getByText(/Movies/i);
  expect(moviesTab).toBeInTheDocument();

  const tvTab = getByText(/TV Shows/i);
  expect(tvTab).toBeInTheDocument();

  const search = getByTestId('search');
  expect(search).toBeInTheDocument();

  const grid = getByTestId('grid');
  expect(grid).toBeInTheDocument();
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
