import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

for (const img of galleryItems) {
    const divGallery = document.createElement('div');
    const linkImg = document.createElement('a');
    const elementImg = document.createElement('img');

    divGallery.classList.add('gallery__item');
    linkImg.classList.add('gallery__link');
    linkImg.href = img.original;
    elementImg.classList.add('gallery__image');
    elementImg.dataset.source = img.original;
    elementImg.src = img.preview;
    elementImg.alt = img.description;

    linkImg.append(elementImg);
    divGallery.append(linkImg);
    gallery.append(divGallery);
}