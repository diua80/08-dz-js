import SimpleLightbox from "simplelightbox/dist/simple-lightbox.esm";
import "simplelightbox/dist/simple-lightbox.min.css";

// Add imports above this line


import { galleryItems } from './gallery-items';


// Change code below this line

const gallery = document.querySelector('.gallery');

const createGalleryItem = (item) => {
    const galleryItem = `
  <li class="gallery__item">
   <a class="gallery__link" href="${item.original}">
      <img class="gallery__image" src="${item.preview}" alt="${item.description}"/>
   </a>
</li>
`;
    
    gallery.innerHTML += galleryItem;
}

const renderGallery = (items) => {
    items.forEach((item) => createGalleryItem(item));
};

renderGallery(galleryItems);

  const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250,
  captionPosition: 'bottom'
  });

