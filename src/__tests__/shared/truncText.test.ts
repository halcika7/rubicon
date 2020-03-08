import truncateText from 'shared/truncText';

test('should return same string without sliceing', () => {
  const text = 'short string';
  const funct = truncateText(text);

  expect(funct).toBe(text);
});

test('should slice string and add ...', () => {
  const text =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, ducimus! Iure aperiam quis obcaecati! Dolore inventore, eos reprehenderit doloremque nesciunt quam qui neque quibusdam, pariatur asperiores assumenda! Officia, voluptatibus quisquam?';
  const expectedResult = text.slice(0, 30).concat('...');
  const funct = truncateText(text);

  expect(funct).toBe(expectedResult);
});

describe('should throw an error', () => {
  it('should throw an error', () => {
    const nonText = 20;
    const funct = () => truncateText(nonText);
    expect(funct).toThrow(TypeError);
  });
});
