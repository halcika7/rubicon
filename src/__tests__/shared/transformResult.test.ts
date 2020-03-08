import {
  transformDataResponse,
  transformVideoResponse,
} from 'shared/transformResult';

test('test for array of tv shows / movies without backdrop_path', () => {
  const data = [{ id: '', name: '', backdrop_path: '', overview: '' }];
  const equalTo = [{ id: '', title: '', img: 'placeholder.png', overview: '' }];

  const func = transformDataResponse(data);

  expect(func).toEqual(equalTo);
});

test('test for array of videos should pass', () => {
  const data = [{ site: 'YouTube', key: '' }];
  const func = transformVideoResponse(data);

  expect(func).toEqual('www.youtube.com/watch?v=');
});
