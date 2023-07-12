const gameSearchBtn = document.querySelector(".game-search-btn");
const searchData = document.querySelector(".search-data");
const gameName = document.querySelector(".game-name");
const gamePrice = document.querySelector(".game-price");
const gameImage = document.querySelector(".game-image");
const gameSection = document.querySelector(".game-section");

gameSearchBtn.addEventListener("click", getGame);

function getGame(e) {
  e.preventDefault();
  gameSection.innerHTML = "";
  let game = searchData.value;
  fetch(`https://www.cheapshark.com/api/1.0/games?title=${game}`)
    .then(res => res.json())
    .then(data => {
      data.forEach(element => {
        gameSection.innerHTML += `<article class="game-data">
            <h3 class="game-name">${element.external}</h3>
            <p class="game-price">$${element.cheapest}</p>
            <img src="${element.thumb}" alt="${element.external} image" class="game-image" />
          </article>`;
      });
    })
    .catch(err => {
      console.log(`error ${err}`);
    });
}
