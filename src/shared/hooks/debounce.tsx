import React from 'react';

/**
 * @export
 * @param {string} value
 * @param {number} delay
 * @returns {string}
 */
export default function useDebounc(value: string, delay: number): string {
  // value for searching videos or movies
  const [debouncedValue, setDebouncedValue] = React.useState(value);

  React.useEffect(() => {
    // Set debouncedValue to value (passed in) after the specified delay
    let handler: any = null;

    // if passed in value length > 2 setTimeout
    // otherwise return value
    if (value.length > 2) {
      handler = setTimeout(() => setDebouncedValue(value), delay);
    } else {
      setDebouncedValue(value);
    }

    // if the user is typing
    // we don't want the debouncedValue to update until
    // they've stopped typing for 1000ms.
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}
