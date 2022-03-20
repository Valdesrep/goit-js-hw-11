import './css/styles.css';
import { fetchImage } from './js/fetchImage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const refs = {
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.search-form'),
  btn: document.querySelector('button[type="submit"] '),
  input: document.querySelector('[name="searchQuery"]'),
};

let page;
let imageToFind;

refs.btn.addEventListener('click', onBtnClick);
refs.form.addEventListener('input', onFormInput);

function onBtnClick(event) {
  page = 1;
  event.preventDefault();
}

function onFormInput() {
  imageToFind = refs.input.value.trim();
  return imageToFind;
}

const lightbox = new SimpleLightbox('.gallary a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function getMurkup(img) {
  const murkup = photoTmp(img);
  refs.gallery.insertAdjacentHTML('beforeend', murkup);
  lightbox.refresh();
}
