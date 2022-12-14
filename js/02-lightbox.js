import simpleLightbox from '../simplelightbox-master/dist/simple-lightbox.js';
import { galleryItems } from './gallery-items.js';
// Change code below this line

const gallery = document.querySelector('.gallery');

for (const img of galleryItems) {
    const liImg = document.createElement('li');
    const linkImg = document.createElement('a');
    const elementImg = document.createElement('img');

    linkImg.classList.add('gallery__item');
    linkImg.href = img.original;
    elementImg.classList.add('gallery__image');
    elementImg.src = img.preview;
    elementImg.alt = img.description;

    linkImg.append(elementImg);
    liImg.append(linkImg);
    gallery.append(liImg);
}

gallery.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return;
    }

    // const lightbox = new simpleLightbox(`
    //     <img src="${e.target.dataset.source}" width="800" height="600">
    // `);
    const lightbox = new simpleLightbox(
        `.gallery a`, {sourceAttr}
        );

    // gallery.addEventListener("keydown", (e) => {
    //     if (e.code === "Escape") {
    //         lightbox.close();
    //     }
    // });
}