import SlimSelect from 'slim-select';

import './css/loader.css';

import { fetchBreeds, fetchCatByBreed, fetchCatImg } from './js/cat-api';
import { showError, hideLoader } from './js/helpers';

const breedInfoEl = document.querySelector('.cat-info');
const selectEl = document.querySelector('.breed-select');

// new SlimSelect({
//   select: selectEl,
// });

fetchBreeds()
  .then(showBreeds)
  .catch(showError)
  .finally(() => {
    hideLoader();
    selectEl.hidden = false;
  });

// selectEl.addEventListener('input', onSelect);

function showBreeds(breeds) {
  const selectMarkup = breeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');

  selectEl.innerHTML = selectMarkup;
  new SlimSelect({
    select: selectEl,
    events: {
      afterChange: onSelect,
    },
  });
}

function onSelect(query) {
  const searchId = query[0].value;

  fetchCatByBreed(searchId)
    .then(breed => showBreed(breed[0].breeds[0]))
    .catch(showError)
    .finally(hideLoader);
}

function showBreed(breed) {
  const name = breed.name;
  const temperament = breed.temperament;
  const desc = breed.description;

  fetchCatImg(breed.reference_image_id)
    .then(res => {
      const markup = `
         <img src="${res.url}" alt="${name} "width="400">
      <h2>${name}</h2>
      <p>${temperament}</p>
      <p>${desc}</p>`;

      breedInfoEl.innerHTML = markup;
    })
    .catch(showError)
    .finally(() => {
      hideLoader();
      breedInfoEl.hidden = false;
    });
}
