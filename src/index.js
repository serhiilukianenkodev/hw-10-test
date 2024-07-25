import { fetchBreeds, fetchCatByBreed, fetchCatImg } from './cat-api';
// 'x-api-key'
// 'live_6LtOq60s5fIHrbRM9r9IrxeJXsqT0vsnfIjhAkCuuyVXXChXSV2blRkKHS5PpFki'
// 'api_key=live_6LtOq60s5fIHrbRM9r9IrxeJXsqT0vsnfIjhAkCuuyVXXChXSV2blRkKHS5PpFki'

const breedInfoEl = document.querySelector('.cat-info');
fetchBreeds().then(showBreeds).catch(console.log);

const selectEl = document.querySelector('.breed-select');
selectEl.addEventListener('input', onSelect);

function showBreeds(breeds) {
  const selectMarkup = breeds
    .map(({ id, name }) => `<option value="${id}">${name}</option>`)
    .join('');

  selectEl.innerHTML = selectMarkup;
}

function onSelect(evt) {
  const searchId = evt.target.value;

  fetchCatByBreed(searchId)
    .then(breed => showBreed(breed[0].breeds[0]))
    .catch(console.log);
}

// появляется изображение и развернутая информация о коте: название породы, описание и темперамент.
function showBreed(breed) {
  console.log(breed);
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
    .catch(console.log);
}
