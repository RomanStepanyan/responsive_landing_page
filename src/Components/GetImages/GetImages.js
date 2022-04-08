import axios from 'axios';
import PropTypes from 'prop-types';

const API_KEY = '19626166-06d2415af44c148da2cace63b';
const BASE_URL = `https://pixabay.com/api/`;

axios.defaults.baseURL = BASE_URL;
axios.defaults.params = {
  key: API_KEY,
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: 8,
  q: 'animals',
};

const GetImages = async ({ page }) => {
  try {
    const { data } = await axios.get('', {
      params: { page },
    });
    return data.hits;
  } catch (error) {
    console.log('error', { error });
    return [];
  }
};

export default GetImages;

GetImages.propType = {
  page: PropTypes.number,
};
