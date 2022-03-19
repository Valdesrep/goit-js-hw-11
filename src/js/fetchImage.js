const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '26220037-ba2b9defb736764e21d2f2b28';
const axios = require('axios').default;

async function fetchImage() {
  const params = `image_type=photo&orientation=horizontal&safesearch=true&per_page=40&page=${page}`;
}
