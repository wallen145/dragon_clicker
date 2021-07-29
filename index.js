var dragon_img = "./images/dragon-154565_1280.png"
var click_target_id;
var dragons = [{
        id: 1,
        type: 'Earth',
        class_name: 'earthDragon',
        clicks: 0,
        background: "#BFFCC6"
    },
    {
        id: 2,
        type: 'Wind',
        class_name: 'windDragon',
        clicks: 0,
        background: "#CBDFFD"
    },
    {
        id: 3,
        type: 'Fire',
        class_name: 'fireDragon',
        clicks: 0,
        background: "#F3FFE3"
    },
    {
        id: 4,
        type: 'Water',
        class_name: 'waterDragon',
        clicks: 0,
        background: "#E7FFAC"
    },
    {
        id: 5,
        type: 'Forest',
        class_name: 'forestDragon',
        clicks: 0,
        background: "#FFFFD1"
    },
];

var navBar = document.getElementById("navBar");
var visibleDragon;

function drawMenuItem(id) {
    console.log(dragons[id].type);
    let unorderedList = document.createElement("ul");
    let listItem = document.createElement("li");
    listItem.setAttribute('id', dragons[id].type);
    listItem.setAttribute('value', dragons[id].type);
    listItem.innerHTML = '<font size="18px">' + dragons[id].type; + '</font>';
    listItem.addEventListener('click', function(e) {
        dragonDisplay(id);
    });
    unorderedList.appendChild(listItem);
    navBar.appendChild(unorderedList);
}

for (var i = 0; i < dragons.length; i++) {
    drawMenuItem(i);
}

function incrementCount(id) {
    dragons[id].clicks += 1;
    let output = document.querySelector("#click_count");
    console.log(dragons[id].clicks);
    output.innerHTML = `Click count: ${dragons[id].clicks}`;
}

function dragonFactory(id) {
    console.log(dragons[id].type);
    let dragonHTML = `
    <div id="button_collection" style="background-color: ${dragons[id].background}">
      <div id="button_container">
        <output class="centered_text">${dragons[id].type}</output>
        <button id="click_me" onClick="incrementCount(${id})">
          <img src="${dragon_img}" class="${dragons[id].class_name}" alt="Dragon image"/>
        </button>
        <output id="click_count" class="centered_text">Click count: ${dragons[id].clicks}</output>
      </div>
    </div>  
  `
    return (dragonHTML);
}

function dragonDisplay(id) {
    dragons[id].count = 0;
    let attach_here = document.querySelector("#attach_here");
    if (typeof collection !== 'undefined') {
        collection.innerHTML = "";
    }   
    let dragon = dragonFactory(id)  
    attach_here.innerHTML = dragon; 
}