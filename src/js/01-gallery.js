// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line

import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const galleryEl = document.querySelector('.gallery');
createGallery();
createModalImg();

function createGallery() {
  const imgsHTML = galleryItems
    .map(
      ({ preview, description, original }) =>
        ` <li>
        <a class="gallery__item" href="${original}">
          <img
            class="gallery__image"
            src="${preview}"
            alt="${description}"           
          />
        </a>
      </li> `,
    )
    .join('');

  galleryEl.insertAdjacentHTML('afterbegin', imgsHTML);
}
function createModalImg() {
  const opt = {
    captionsData: 'alt',
    captionDelay: 250,
  };
  const lightbox = new SimpleLightbox('.gallery a', opt);
}
