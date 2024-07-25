import axios from 'axios';

import { showLoader } from './helpers';

// 'x-api-key'
// 'live_6LtOq60s5fIHrbRM9r9IrxeJXsqT0vsnfIjhAkCuuyVXXChXSV2blRkKHS5PpFki'

const BASE_URL = 'https://api.thecatapi.com/v1';
const API_KEY =
  'live_6LtOq60s5fIHrbRM9r9IrxeJXsqT0vsnfIjhAkCuuyVXXChXSV2blRkKHS5PpFki';

const breedInfoEl = document.querySelector('.cat-info');

axios.defaults.headers.common['x-api-key'] = API_KEY;

export function fetchBreeds() {
  showLoader();

  return axios.get(`${BASE_URL}/breeds`).then(res => res.data);
}

export function fetchCatByBreed(id) {
  showLoader();
  breedInfoEl.hidden = true;

  return axios.get(`${BASE_URL}/images/search?breed_ids=${id}`).then(res => {
    return res.data;
  });
}

export function fetchCatImg(id) {
  showLoader();

  return axios.get(`${BASE_URL}/images/${id}`).then(res => {
    return res.data;
  });
}
