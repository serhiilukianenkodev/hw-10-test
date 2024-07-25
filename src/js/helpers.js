import { Notify } from 'notiflix/build/notiflix-notify-aio';

const loaderEl = document.querySelector('.loader');
// const errorEl = document.querySelector('.error');

export function showLoader() {
  loaderEl.style.display = '';
  //   errorEl.hidden = true;
}

export function hideLoader() {
  loaderEl.style.display = 'none';
}

export function showError() {
  Notify.failure(' Oops! Something went wrong! Try reloading the page!');
  //   errorEl.hidden = false;
}
