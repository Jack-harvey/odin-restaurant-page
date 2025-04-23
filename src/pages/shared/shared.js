const content = document.querySelector("#content");

export function clearContent() {
  content.innerHTML = "";
}

export function navEventListener() {
  window.addEventListener("load", () => {
    const navBar = document.querySelector("nav");

    navBar.addEventListener("click", (event) => {
      console.log(event.target.id);
    });
  });
}
