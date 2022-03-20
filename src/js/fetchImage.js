const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '26220037-ba2b9defb736764e21d2f2b28';
const axios = require('axios').default;

async function fetchImage(img, page) {
  const params = `image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
  const response = await axios.get(`${BASE_URL}?key=${API_KEY}&q=${img}&${params}`);
  const images = response.data;
  return images;
}

export { fetchImage };
