import React from 'react';
import { shallow } from 'enzyme';

import Footer from 'components/footer/footer';

describe('check foooter content', () => {
  it('should render Made with', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.contains('Made with by Haris Beslic'));
  });
});
