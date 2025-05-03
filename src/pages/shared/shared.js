const content = document.querySelector("#content");

export function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}

export function normalLayout(pageTitle, imgSource = null) {
  const pageTemplate = document.createElement("div");
  pageTemplate.classList.add("page-template");
  const title = document.createElement("H1");
  title.innerHTML = pageTitle;

  pageTemplate.appendChild(title);

  if (imgSource) {
    const imgEl = document.createElement("img");
    const imgContainer = document.createElement("div");
    imgContainer.classList.add("image-container");
    imgEl.src = imgSource;
    imgContainer.append(imgEl);
    pageTemplate.appendChild(imgContainer);
  }

  return pageTemplate;
}
