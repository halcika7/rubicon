import { TVMovie } from 'store/TVMovie/TVMovieTypes';

// placeholder image from assets
import Image from 'assets/images/placeholder.png';

/**
 * @param {Array<any>} data
 * @returns {Array<TVMovie>}
 */
export const transformDataResponse = (data: Array<any>): Array<TVMovie> =>
  // get first 10 results
  // transform data for usage in app
  data.slice(0, 10).map(({ id, title, name, backdrop_path, overview }) => ({
    id,
    title: title !== undefined ? title : name,
    img: backdrop_path
      ? `${process.env.REACT_APP_BACKDROP_URL}${backdrop_path}`
      : Image,
    overview,
  }));

/**
 * @param {Array<any>} data
 * @returns {string}
 */
export const transformVideoResponse = (data: Array<any>): string => {
  // filter response by site and take first one
  const [filtered] = data.filter(value => value.site === 'YouTube').slice(0, 1);

  // use key from filtered
  const video_url = `www.youtube.com/watch?v=${filtered.key}`;

  return video_url;
};
