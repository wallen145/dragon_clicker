var clicks = 0;
var click_target_id;
var dragons = [
  {
    id: 1,
    type: 'Earth',
    clicks: 0
  },
  {
    id: 2,
    type: 'Wind',
    clicks: 0
  },
  {
    id: 3,
    type: 'Fire',
    clicks: 0
  },
];

var backgrounds = ["#BFFCC6", "#DBDFFD6", "#F3FFE3", "#E7FFAC", "#FFFFD1", "#FFC9DE", "FFABAB", "#FFBEBC", "#FFCBC1", "#FFF5BA"];

function drawDragon(id) {
  console.log(`drawing dragon ${id}`);
  let collection = document.querySelector("#button-collection")
  let btnContainer = document.createElement("div");
  btnContainer.className="button-container";
  //btnContainer.style.backgroundColor = backgrounds[(Math.floor(Math.random() * backgrounds.length))]

  //let typeDiv = document.createElement("div");
  //typeDiv.innerHTML = `<font size="200%">${dragons[id].type}</font>`;
  console.log(dragons[id].type, backgrounds[(Math.random() * backgrounds.length)]);

  let btn = document.createElement("button");
  btn.id = id;
  btn.style.backgroundColor = backgrounds[(id%9)];
  //btn.appendChild(typeDiv);
  btn.innerHTML = '<font size="200%">&#128009;</font>'

  let div = document.createElement("div");
  div.className = "centered-text";
  div.innerHTML = "Click Me!!!";
  btn.appendChild(div);

  let output = document.createElement("output");
  output.className="click-output";
  output.id = "click-me-count";
  output.innerHTML = "0";
  btn.appendChild(output);

  btn.appendChild(div);
  btn.addEventListener('click', function(e) {
    dragons[id].clicks += 1;
    output.innerHTML = dragons[id].clicks;
 });
 btnContainer.innerHTML=`<h2>${dragons[id].type}</h2>`;
 btnContainer.appendChild(btn);
 collection.appendChild(btnContainer);
}

for (var i = 0; i < dragons.length; i++) {
  drawDragon(i); 
}
