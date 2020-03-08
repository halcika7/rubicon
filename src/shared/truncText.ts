/**
 * @param {string} value
 * @returns {string}
 */
const truncateText = (value: any): string => {
  if (typeof value !== 'string') {
    throw new TypeError('Please provide a string value');
  }

  return value.length < 30 ? value : value.slice(0, 30).concat('...');
};

export default truncateText;
