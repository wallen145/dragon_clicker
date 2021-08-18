class NavBarView {
  constructor(controller) {
      this.controller = controller;
  }
  navBarViewFactory(list) {
      let html = ""
      let htmlStart = "<ul>"
      let  htmlEnd = "</ul>"
      for (let i = 0; i < list.length; i++) {
          console.log('parameter to controller.dispatch', list[i].dragonType)
          html += `<li value="${list[i].dragonType}" onclick='controller.dispatch("${list[i].id}", "addDragon")'>${list[i].dragonType}</li>`
      }
      html = htmlStart + html + htmlEnd
      console.log(html)
      return(html)
  }

  renderNavBar(list) {
      let html = this.navBarViewFactory(list)
      let navbar = document.getElementById("navBar");
      navbar.innerHTML = html;
      return(navbar);
  }

  modal_input() {
    console.log('in modal_input')
    let formHTML = `
      <form id="modal_form" class="modal-dialog">
        <h2>New Dragon Type</h2>
        <label for="dragonType" class="form-element">Dragon Type
          <input id="dragonType" type="text" name="dragonType" placeholder="Enter unique name" onchange="controller.uniqueDragonType(this.value)" required/>
        </label>
        <div>
          <label id="msg" class="error-msg"></label>
        </div> 
        <label id="img_src" class="rad">
          <input type="radio" name="rad1" value='./images/dragon_221-2217507.png' checked>
          <img id="img1" src='./images/dragon_221-2217507.png' alt="dragon image 1">
          <i>Image 1</i>
        </label>
        <label class="rad">
          <input type="radio" name="rad1" value='./images/dragon_221-2217507.png'>
          <img id="img2" src='./images/dragon_221-2217507.png' alt="dragon image 2">
          <i>Image 2</i>
        </label>
        <label class="form-element">
          <input type="radio" name="rad1" value='./images/dragon-154565_1280.png'>
          <img id="img2" src='./images/dragon-154565_1280.png' alt="dragon image 3" width="50" height="50">
          <i>Image 3</i>
        </label>        
        <label class="form-element">
          <input type="radio" name="rad1" value='./images/dragon-154565_1280.png'>
          <img id="img3" src='./images/dragon-154565_1280.png' alt="dragon image 4" width="50" height="50">
          <i>Image 4</i>
        </label>
        <label for="startClicks" class="form-element">Start Clicks
          <input id="startClicks" type="text" name="startClicks" placeholder="Enter starting clicks (0 or higher)"/>
        </label>
        <label for="background" class="form-element">Background color
          <input id="background" type="color" name="background"/>
        </label>
        <div>      
          <button id="submitBtn" type="submit" onclick="controller.closeModal(document.getElementById('dragonType').value, document.getElementById('img_src').value, document.getElementById('startClicks').value, document.getElementById('background').value)">Submit</button>
          <button id="cancelBtn" type="cancel" onclick="closeModalDialog('.modalMask')" formnovalidate>Cancel</button>
        </div>
        <div>
          <label id="msg" />
        </div>     
      </form> 
    `
    document.querySelector('#modal_content').innerHTML = formHTML;
    //document.getElementById("modal_dialog").style = "";
    modal_content.style.display="block";
    document.getElementById("modal_form").style.opacity = '1';
  }
}

// test model functions

class DragonView {
  constructor(controller) {
      this.controller = controller;
      this.dragon_img = "./images/dragon-154565_1280.png";
  }

  dragonFactory(dragon) {
      let dragonHTML = `
        <div id="button_container">
          <output class="centered_text">Type: ${dragon.dragonType} ID: ${dragon.id}</output>
          <button onclick="controller.dispatch(${dragon.id}, 'clickDragon'); return false;">
            <img src="${dragon.imgsrc}" class="dragon ${dragon.class_name}" alt="Dragon image"/>
          </button>
          <output id="click_count${dragon.id}" class="centered_text">Click count: ${dragon.clicks}</output>
          <output id="level_count${dragon.id}" class="centered_text">Level: ${dragon.level}</output>
          <p><a onclick="controller.dispatch(${dragon.id}, 'deleteDragon'); return false;">Delete</a></p>
        </div> 
    `
      return (dragonHTML);
  }

  render(dragonlist) {
      let dragon = {}
      let background = "white"
      //if (list.length > 0 && lastSelected !== 'All') background = list[0].background
      
      let html = `<div id="button_collection" style="background-color:${background}">`

      for (let i = 0; i < dragonlist.length; i++) {
          html += this.dragonFactory(dragonlist[i])     
      }
      html += "</div>"
      let attach_here = document.querySelector('#attach_here')
      attach_here.innerHTML = html; 
  }

}

