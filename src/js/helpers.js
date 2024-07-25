const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');

export function showLoader() {
  // loaderEl.hidden = false;
  loaderEl.style.display = '';
  errorEl.hidden = true;
}

export function hideLoader() {
  //   loaderEl.hidden = true;
  //   console.dir(loaderEl);
  loaderEl.style.display = 'none';
}

export function showError() {
  errorEl.hidden = false;
}

// export function hideError() {
//   errorEl.hidden = true;
// }
