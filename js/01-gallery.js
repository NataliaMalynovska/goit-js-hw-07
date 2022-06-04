import { galleryItems } from './gallery-items.js';
// Change code below this line
const galleryContainer = document.querySelector(".gallery");
const galleryImages= createGalleryImages(galleryItems);

galleryContainer.insertAdjacentHTML("beforeend", galleryImages);


function createGalleryImages(galleryItems) {
    return galleryItems
        .map(({ preview, original, description }) => {
            return `
    <div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source= ${original} alt="${description}" />
    </a>
    </div>               
            `;
        }).join(``);
}

galleryContainer.addEventListener("click", onGalleryContainerClick)

function onGalleryContainerClick(event) {
    event.preventDefault();
    // const isGalleryImage = event.target.classList.contains("gallery__image");
    // if (!isGalleryImage) {
    //     return;
    // }
    const modalShow = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">
`)

instance.show()
    console.log(event.target)
    console.log(event.currentTarget)
    console.log(event.target.dataset.source)
}

// console.log(galleryItems);
