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

gallery.addEventListener("click", onImageClick);

function onImageClick(e) {
    e.preventDefault();
    
    if (e.target.nodeName !== "IMG") {
        return;
    }

    const instance = basicLightbox.create(`
        <img src="${e.target.dataset.source}" width="800" height="600">
    `);
    instance.show();

    if (instance.visible()) {
        gallery.addEventListener("keydown", (e) => {
            if (e.code === "Escape") {
                instance.close();
            }
        })
    };
}