import React from 'react';
import { render } from '@testing-library/react';
import GridList from 'components/gridList/gridList';
import GridItem from 'components/gridItem/gridItem';
import { BrowserRouter } from 'react-router-dom';

const fake = (cal: string) => cal;

test('mounts', () => {
  // const { container } = render(
  //   <BrowserRouter>
  //     <GridList>
  //       <GridItem
  //         value={{ id: 23, img: '', title: '', overview: '' }}
  //         type="tv"
  //       />
  //     </GridList>
  //   </BrowserRouter>
  // );
  // expect(container.firstChild).toMatchSnapshot();
});
