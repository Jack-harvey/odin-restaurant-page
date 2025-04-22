const content = document.querySelector("#content");

import homeImage from "./img/home.jpg";

export function createContent() {
  content.innerHTML = ` 
  <div class="home">
  
  <h1>Jack's Kitchen</h1>
        <img src=${homeImage} />
        <p>
          Welcome to Jack's Kitchen, an exclusive culinary retreat where simplicity meets
          sophistication. 
                    </p>
          <p> 
          Nestled in the heart of the city’s most refined quarter, we elevate the
          humble jam sandwich and classic chicken salad to an art form, using only the finest plain
          white breads, heritage fruits, and hand-selected poultry.
          </p>
          <p> 
          Our intimate setting and bespoke
          service invite a discerning clientele to savor the elegance of minimalism—where every bite
          is a quiet revolution in taste.
        </p>
        
        </div>`;
}
