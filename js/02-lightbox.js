// import simpleLightbox from '../simplelightbox-master/dist/simple-lightbox.js';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

galleryItems.forEach((image) => {
    gallery.insertAdjacentHTML(
        "beforeend",
        `<a class="gallery__item" href="${image.original}">
         <img class="gallery__image" src="${image.preview}" alt="${image.description}" />
        </a>`
    );
});

let lightbox = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250, });