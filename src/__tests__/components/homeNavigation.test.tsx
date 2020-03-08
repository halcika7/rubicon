import React from 'react';
import { render } from '@testing-library/react';
import HomeNavigation from 'components/homeNavigation/homeNavigation';
import { BrowserRouter } from 'react-router-dom';

const fake = (cal: string) => cal;

test('mounts', () => {
  const { container } = render(
    <BrowserRouter>
      <HomeNavigation tab="" onTabChange={fake} />
    </BrowserRouter>
  );
  // expect(container.firstChild).toMatchSnapshot();
});
