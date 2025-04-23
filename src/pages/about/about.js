export function navEventListener() {
  window.addEventListener("load", () => {
    const navBar = document.querySelector("#about");

    navBar.addEventListener("click", (event) => {
      console.log(event);
    });
  });
}
