// document.getElementById("parent").innerHTML = '<div class="card">
//         <h2>Card title 1</h2>
//         <div class="card-body"></div>
//         <div class="card-footer"></div>
//       </div>';

let parentDiv = document.getElementById("parent");
let images = [
  "https://cdn.staticneo.com/w/naruto/Nprofile2.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZk3Tux8s8Eou-jkvBDuzNXX48nZRl6cPNGA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrmc88PffAo0Dkm8ESzfQZDOlvOpD2NtzKow&s",
  "https://static.wikia.nocookie.net/characterprofile/images/4/4b/Kakashi.png/revision/latest?cb=20160918182038",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRKWsh0hvyOxaKpllxrn-yb7UPreRozyIf9w&s",
];
let cards = "";
for (let i = 0; i < 5; i++) {
  let card =
    `<div class="card">
<h2>Card title` +
    1 +
    `</h2>
<div class="card-body">
<img src="` +
    images[i] +
    `" alt ="" /></div>
<div class="card-footer">
</div>
</div>`;
  cards = cards + card;
}
parentDiv.innerHTML = cards;
