const mvvContainer = document.querySelector("#mvv-container");     
mvvContainer.innerHTML = "";
          serviceData.forEach((card) => {
            const cardHTML = `
            <div class="mvv-block" id="${card.title.replace(/\s+/g, '-').toLowerCase()}">
            <div class="mvv-image">
              <img src="${card.img}" alt="${card.title}">
            </div>
            <div class="mvv-content">
              <h4 class="text-black">${card.title}</h4>
              <p>${card.description}</p>
            </div>
          </div>
            `;
            mvvContainer.insertAdjacentHTML("beforeend", cardHTML);});  