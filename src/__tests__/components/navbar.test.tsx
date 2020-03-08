import React from 'react';
import { render } from '@testing-library/react';
import Navbar from 'components/navbar/navBar';
import { BrowserRouter } from 'react-router-dom';

test('mounts', () => {
  const { container } = render(
    <BrowserRouter>
      <Navbar />
    </BrowserRouter>
  );
  // expect(container.firstChild).toMatchSnapshot();
});
