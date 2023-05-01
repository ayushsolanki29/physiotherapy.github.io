
const cardContainer = document.querySelector("#card-container");
const checkbox = document.querySelector("#language-checkbox");

    document.addEventListener("DOMContentLoaded", function() {
        langCheck();
      });
      checkbox.addEventListener("change", langCheck);
        function langCheck() {
        
            cardData.forEach((card) => {
              const cardHTML = `
                <div class="col-md-4 col-sm-6 mb-4">
                  <div class="card">
                    <div class="icon-box">
                      <img decoding="async" src="${card.image}">
                    </div>
                    <div>
                      <h4>${card.name}</h4>
                      <p>${card.description}</p>
                      <a href="${card.link}" class="main-btn mt-4">Read More</a>
                    </div>
                  </div>
                </div>
              `;
              cardContainer.insertAdjacentHTML("beforeend", cardHTML);
            });
          
            checkbox.addEventListener("change", () => {
              if (checkbox.checked) {
                cardContainer.innerHTML = "";
                cardDataGujarati.forEach((card) => {
                  const cardHTML = `
                    <div class="col-md-4 col-sm-6 mb-4">
                      <div class="card">
                        <div class="icon-box">
                          <img decoding="async" src="${card.image}">
                        </div>
                        <div>
                          <h4>${card.name}</h4>
                          <p>${card.description}</p>
                          <a href="${card.link}" class="main-btn mt-4">Read More</a>
                        </div>
                      </div>
                    </div>
                  `;
                  cardContainer.insertAdjacentHTML("beforeend", cardHTML);
                });
              } else {
                cardContainer.innerHTML = "";
                cardData.forEach((card) => {
                  const cardHTML = `
                    <div class="col-md-4 col-sm-6 mb-4">
                      <div class="card">
                        <div class="icon-box">
                          <img decoding="async" src="${card.image}" alt="${card.name}">
                        </div>
                        <div>
                          <h4>${card.name}</h4>
                          <p>${card.description}</p>
                          <a href="Treatments-Details.html#${card.id}" class="main-btn mt-4">Read More</a>

                        </div>
                      </div>
                    </div>
                  `;
                  cardContainer.insertAdjacentHTML("beforeend", cardHTML);
                });
              }
            });
          }



        