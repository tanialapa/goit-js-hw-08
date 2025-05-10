import { galleryItems } from "./gallery-items.js";
// Change code below this line

const fragment = new DocumentFragment();

function createListItemsMarkup(items) {
  items.forEach((item) => {
    const liElement = document.createElement("li");
    const imgElement = document.createElement("img");
    imgElement.src = item.preview;
    imgElement.setAttribute("data-url", item.original);
    liElement.textContent = item.description;

    liElement.appendChild(imgElement);
    fragment.appendChild(liElement);
  });
}

const list = createListItemsMarkup(galleryItems);

const ulList = document.querySelector("ul");

console.log("basicLightbox ", basicLightbox);

ulList.appendChild(fragment);

ulList.addEventListener("click", onUlListClick);



function onUlListClick(event) {
  console.log(event.target);
  const originalUrl = event.target.getAttribute("data-url");

  const instance = basicLightbox.create(`
    <img src="${originalUrl}" width="800" height="600">
`);

  instance.show();

  console.log(originalUrl);
}
