import React from 'react';
import { shallow } from 'enzyme';

import GridItem from 'components/gridItem/gridItem';

describe('render <GridItem />', () => {
  const wrapper = shallow(
    <GridItem
      value={{ id: 23, img: '', title: 'Title', overview: '' }}
      type="tv"
    />
  );

  it('should render 1 grid item', () => {
    const gridItem = wrapper.find('.gridItem');
    expect(gridItem.length).toBe(1);

    const overlay = gridItem.find('.overlay');
    expect(overlay.length).toBe(1);
    expect(overlay.children().length).toBe(1);

    const cover = wrapper.find('.cover');
    expect(cover.length).toBe(1);

    const title = wrapper.find('.title');
    expect(title.length).toBe(1);
  });

  it('should render 1 grid item', () => {
    const title = wrapper.find('.title');
    expect(title.contains('Title')).toBe(true);
  });

  it('should trucate title', () => {
    const title =
      'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus! Iure aperiam quis obcaecati! Dolore inventore, eos reprehenderit doloremque nesciunt quam qui neque quibusdam, pariatur asperiores assumenda! Officia, voluptatibus quisquam?';
    wrapper.setProps({ value: { id: 23, img: '', title, overview: '' } });
    const itemTitle = wrapper.find('.title').getElement().props.children;
    expect(itemTitle).toEqual(title.slice(0, 30).concat('...'));
  });
});
