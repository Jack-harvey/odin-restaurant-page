const content = document.querySelector("#content");

import homeImage from "./img/home.jpg";

export function createContent() {
  const title = "Jack's Kitchen";
  const description = [];

  description.push(
    "Welcome to Jack's Kitchen, an exclusive culinary retreat where simplicity meets sophistication."
  );
  description.push(
    "Nestled in the heart of the city’s most refined quarter, we elevate the humble jam sandwich and classic chicken salad to an art form, using only the finest plain white breads, heritage fruits, and hand-selected poultry."
  );
  description.push(
    "Our intimate setting and bespoke service invite a discerning clientele to savor the elegance of minimalism—where every bite is a quiet revolution in taste."
  );

  const headingEl = document.createElement("h1");
  content.appendChild(headingEl);
  headingEl.textContent = title;

  const imageDiv = document.createElement("div");
  const image = document.createElement("img");
  image.src = homeImage;
  imageDiv.appendChild(image);
  content.appendChild(imageDiv);

  const descriptionDiv = document.createElement("div");

  for (let i = 0; i < description.length; i++) {
    let descriptionContent = description[i];
    let descriptionEl = document.createElement("p");
    descriptionEl.textContent = descriptionContent;
    descriptionDiv.appendChild(descriptionEl);
  }

  content.appendChild(descriptionDiv);
}
