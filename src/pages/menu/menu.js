export function navEventListener() {
  window.addEventListener("load", () => {
    const navBar = document.querySelector("#menu");

    navBar.addEventListener("click", (event) => {
      console.log(event);
    });
  });
}
