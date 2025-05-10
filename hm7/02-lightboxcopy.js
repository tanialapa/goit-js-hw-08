import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const ulList = document.querySelector("ul");
 const fragment = new DocumentFragment();

function createListItemsMarkup(items) {
  items.forEach((item) => {
    const liElement = document.createElement("li");
      liElement.classList.add("gallery__item");
      
      const imgElement = document.createElement("img");
      imgElement.classList.add("gallery__image");
      
    const linkElement = document.createElement("a");
      linkElement.classList.add("gallery__link");
    

    imgElement.src = item.preview;
    linkElement.href = item.original;
    imgElement.alt = item.description;

    linkElement.appendChild(imgElement);
    liElement.appendChild(linkElement);
       fragment.appendChild(liElement);
     
  });
};

const list = createListItemsMarkup(galleryItems);

ulList.appendChild(fragment);
console.log(ulList);

ulList.addEventListener("click", onClick);

function onClick() {
    
}
const lightbox = new SimpleLightbox("a");