const content = document.querySelector("#content");

export function clearContent() {
  while (content.firstChild) {
    content.removeChild(content.firstChild);
  }
}
