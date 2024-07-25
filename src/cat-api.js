export function fetchBreeds() {
  const BASE_URL = 'https://api.thecatapi.com/v1/breeds';
  return fetch(`${BASE_URL}`).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });
}

// https://api.thecatapi.com/v1/images/search?breed_ids=идентификатор_породы
export function fetchCatByBreed(id) {
  return fetch(
    `https://api.thecatapi.com/v1/images/search?breed_ids=${id}&api_key=live_6LtOq60s5fIHrbRM9r9IrxeJXsqT0vsnfIjhAkCuuyVXXChXSV2blRkKHS5PpFki`
  ).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });
}

export function fetchCatImg(id) {
  return fetch(`https://api.thecatapi.com/v1/images/${id}`).then(res => {
    if (!res.ok) throw new Error(res.statusText);
    return res.json();
  });
}
