var dragon_img = "./images/dragon-154565_1280.png"
var clicks = 0;
var click_target_id;
var dragons = [
  {
    id: 1,
    type: 'Earth',
    class_name: 'earthDragon',
    clicks: 0
  },
  {
    id: 2,
    type: 'Wind',
    class_name: 'windDragon',
    clicks: 0
  },
  {
    id: 3,
    type: 'Fire',
    class_name: 'fireDragon',
    clicks: 0
  },
  {
    id: 4,
    type: 'Water',
    class_name: 'waterDragon',
    clicks: 0
  },
  {
    id: 5,
    type: 'Forest',
    class_name: 'forestDragon',
    clicks: 0
  },
];

var backgrounds = ["#BFFCC6", "#DBDFFD6", "#F3FFE3", "#E7FFAC", "#FFFFD1", "#FFC9DE", "FFABAB", "#FFBEBC", "#FFCBC1", "#FFF5BA"];

var navBar = document.getElementById("navBar");
var visibleDragon;

function drawMenuItem(id) {
  console.log(dragons[id].type);
  let unorderedList = document.createElement("ul");
  let listItem = document.createElement("li");
  listItem.setAttribute('id', dragons[id].type);
  listItem.setAttribute('value', dragons[id].type);
  //listItem.innerHTML = `<h2>${dragons[id].type;}</h2>`;
  listItem.innerHTML = '<font size="18px">' + dragons[id].type; + '</font>';
  listItem.addEventListener('click', function (e) {
    if (typeof visibleDragon !== 'undefined') {
      removeDragon(visibleDragon);
    }
    visibleDragon = id;
    drawDragon(id);
  });
  unorderedList.appendChild(listItem);
  navBar.appendChild(unorderedList);
}

for (var i = 0; i < dragons.length; i++) {
  drawMenuItem(i);
}

function removeDragon(id) {
  let collection = document.querySelector("#button-collection");
  let btnContainer = document.getElementById(`${id}`);
  console.log("about to remove: ", id,  dragons[id].type);
  btnContainer.remove();
}

function drawDragon(id) {
  console.log(`drawing dragon ${id}`);
  let collection = document.querySelector("#button-collection")
  let btnContainer = document.createElement("div");
  btnContainer.setAttribute("id", id);
  btnContainer.className = "button-container";

  let btn = document.createElement("button");
  btn.id = id;
  btn.style.backgroundColor = backgrounds[(id % 9)];

  let img = document.createElement("img");
  img.type = "image";
  img.src = dragon_img;
  img.className = `${dragons[id].class_name}`;

  btn.appendChild(img);

  let div = document.createElement("div");
  div.className = "centered-text";
  div.innerHTML = "Click Me!!!";
  btn.appendChild(div);

  let output = document.createElement("output");
  output.className = "click-output";
  output.id = "click-me-count";
  output.innerHTML = dragons[id].clicks;
  btn.appendChild(output);

  btn.appendChild(div);
  btn.addEventListener('click', function (e) {
    dragons[id].clicks += 1;
    output.innerHTML = dragons[id].clicks;
  });
  btnContainer.innerHTML = `<h2>${dragons[id].type}</h2>`;
  btnContainer.appendChild(btn);
  collection.appendChild(btnContainer);
}
