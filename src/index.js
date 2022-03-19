import './css/styles.css';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
const axios = require('axios');

const refs = {
    gallery: document.querySelector(".gallery"),
    form: document.querySelector(".search-form")
};

