let parentDiv = document.getElementById("parent");

let cardsInfo = [
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/d2/99/d299b37b90e3ab8277fa761da5d60f12.webp",
    price: "458 сая ₮",
    description: "Хүннү 2222 1-р ээлж 70мкв 3 өрөө",
    postDetail: "Нийтэлсэн: Өнөөдөр 00:27",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/64/54/64548f381a3bf6737163a5780aa528b1.webp",
    price: "197.44 сая ₮",
    description: "Бзд, шинэ амгалан хотхонд 61.7мкв 3өрөө ипотек",
    postDetail: "Нийтэлсэн: Өчигдөр 23:53",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/d9/c3/d9c3c3e36452e3c5e7799b267418937b.webp",
    price: "3 Тэрбум ₮",
    description: "Casa da vinci-д 309мкв сингл хаус",
    postDetail: "Нийтэлсэн: Өнөөдөр 08:14",
  },
  {
    imgUrl:
      "https://cdn1.unegui.mn/media/cache1/c0/ba/c0bafa232f5a3d9ef3670642d442e46d.webp",
    price: "210 сая ₮",
    description: "Халдварт шөнийн зах 49-р байр 63.21мкв 2 өрөө",
    postDetail: "Нийтэлсэн: Өнөөдөр 12:32",
  },
];

let cards = "";

for (let i = 0; i < cardsInfo.length; i++) {
  let card = `<div class="card">
  <div class="cardImg">
  <img src="${cardsInfo[i].imgUrl}" alt="">
  </div>
    <div class="cardText">
        <div><h2>${cardsInfo[i].price}</h2></div>
        <div><h3>${cardsInfo[i].description}</h3></div> 
        <div><h4>${cardsInfo[i].postDetail}</h4></div> 
    </div>        
    </div>`;
  cards = cards + card;
}

parentDiv.innerHTML = cards;
