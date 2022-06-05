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
let modalShow 
function onGalleryContainerClick(event) {
    event.preventDefault();
    const isGalleryImage = event.target.classList.contains("gallery__image");
    if (!isGalleryImage) {
        return;
    }
    modalShow = basicLightbox.create(`
    <img src="${event.target.dataset.source}" width="800" height="600">`
    )
    
    modalShow.show(window.addEventListener('keydown', onEscKeyPress))     
}

function onEscKeyPress(event) {
    modalShow.close(window.removeEventListener('keydown', onEscKeyPress))
    console.log(event)
    if (event.code === "Escape") (
        modalShow.close()
      )    
}

console.log(galleryItems);
