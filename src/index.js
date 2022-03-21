import './css/styles.css';
import { fetchImage } from './js/fetchImage';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import galleryPhotoTmp from './templates/photo_card.hbs';

const refs = {
  gallery: document.querySelector('.gallery'),
  form: document.querySelector('.search-form'),
  btn: document.querySelector('button[type="submit"] '),
  input: document.querySelector('[name="searchQuery"]'),
  allImages: document.querySelectorAll('.photo-image'),
};

let page;
let imageToFind;

refs.btn.addEventListener('click', onBtnClick);
refs.form.addEventListener('input', onFormInput);
window.addEventListener('scroll', onScroll);

function onBtnClick(event) {
  page = 1;
  event.preventDefault();
  clearGallary();
  imageToFind && renderMarkup();
}

function onFormInput() {
  imageToFind = refs.input.value.trim();
  return imageToFind;
}

const newLightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

function getMarkup(img) {
  const markup = galleryPhotoTmp(img);
  refs.gallery.insertAdjacentHTML('beforeend', markup);
  newLightbox.refresh();
}

async function renderMarkup() {
  try {
    const images = await fetchImage(imageToFind, page);

    if (images.hits.length === 0) {
      Notify.failure('Sorry, there are no images matching your search query. Please try again.');
      return;
    }

    if (page === 1) {
      Notify.info(`Hooray! We found ${images.totalHits} images.`);
    }
    if (refs.allImages.length >= images.totalHits) {
      Notify.failure(`We're sorry, but you've reached the end of search results.`);
      return;
    }
    getMarkup(images);
  } catch (error) {
    console.log(error);
  }
}

function clearGallary() {
  refs.gallery.innerHTML = '';
}

function onScroll() {
  const { scrollTop, clientHeight, scrollHeight } = document.documentElement;

  if (scrollTop + clientHeight > scrollHeight - 40) {
    page += 1;
    renderMarkup();
  }
}
