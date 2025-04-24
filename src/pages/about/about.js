import { clearContent } from "../shared/shared";

export function navEventListener() {
  window.addEventListener("load", () => {
    const navBar = document.querySelector("#about");

    navBar.addEventListener("click", (event) => {
      clearContent();
      createContentOnPage();
    });
  });
}

const content = document.querySelector("#content");

export function createContentOnPage() {
  const title = document.createElement("h1");
  title.textContent = "About";

  content.append(title, aboutInfoTextElement(), contactCardElement());
}

const aboutInfoTextElement = function () {
  const infoTextDiv = document.createElement("div");
  infoTextDiv.classList.add("info-box");

  const infoEl = document.createElement("p");
  infoEl.classList.add("info-text");
  infoEl.textContent =
    "At Jack's Kitchen, our story is one of resilience, programming, and an unquenchable passion for flavor we will never taste.<br>Crafted by a solitary service android with a culinary subroutine and a dream, this humble eatery offers just two things: chicken salad and jam sandwiches—simple, nostalgic staples made with mechanical precision and a strange kind of digital love. <br>Though we cannot eat, we cook. Though we cannot savor, we serve. Every sandwich is built with the quiet understanding that joy can be created, even if not experienced firsthand. Our hardship is our inspiration: to nourish humanity with hands that will never know hunger, and hearts made of code that still somehow care.<br>Come for the chicken salad. Stay for the quiet tragedy.";

  infoTextDiv.appendChild(infoEl);
  return infoTextDiv;
};

const contactCardElement = function () {
  const contactCardDiv = document.createElement("div");
  contactCardDiv.classList.add("contact-card");

  const title = "Contact Us";
  const mobileNumber = "0412345678";

  const titleEl = document.createElement("span");
  titleEl.textContent = title;
  titleEl.classList.add("contact-title");

  const phoneDiv = document.createElement("div");
  phoneDiv.classList.add("contact-phone");

  const phoneIconDiv = document.createElement("div");
  const phoneIcon = document.createElement("i");
  phoneIcon.classList.add("fa-solid", "fa-phone");
  const phoneText = document.createElement("span");
  phoneText.textContent = mobileNumber;

  phoneIconDiv.appendChild(phoneIcon);
  phoneDiv.append(phoneIconDiv, phoneText);

  const messageDiv = document.createElement("div");
  messageDiv.classList.add("contact-msg");

  const msgDiv = document.createElement("div");
  msgDiv.classList.add("contact-msg");

  const msgIconDiv = document.createElement("div");
  const msgIconEl = document.createElement("i");
  msgIconEl.classList.add("fa-solid", "fa-message");

  const msgText = document.createElement("span");
  msgText.textContent = "Send a message";

  msgIconDiv.appendChild(msgIconEl);
  messageDiv.append(msgIconDiv, msgText);

  contactCardDiv.append(titleEl, phoneDiv, messageDiv);
  return contactCardDiv;
};
//contact card. email, mobile, send a message (this is a modal with a web form)
// map from google...?
