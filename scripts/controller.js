class Controller {
  constructor(model, navBarView, dragonView) {
      this.model = model
      this.navBarView = navBarView
      this.dragonView = dragonView
  }

  renderNavBar() {
      let navList = this.model.getNavList()
      let navString = this.navBarView.renderNavBar(navList)
  }

  createUpdateDragon() {
      console.log("in createUpdateDragon")
  }

  dispatch(id, action) {
    console.log('in dispatch', id, action)
    switch(action) {
        case 'showTypes':
            renderNavBar();
            break;
        case 'addDragon':
            if (window.event.ctrlKey) {
                let modal = document.querySelector('#modal_content');
                console.log('modal', modal)
                this.navBarView.modal_input();
                //this.closeModal(dragonName, dragonImg, startClicks, background )
                break;
            } else {
            // else fall through to addDragon   
                this.model.addDragon(id);
                this.dragonView.render(this.model.dragons);
            }
            break;  
        case 'deleteType':
            this.dragonTypeList = this.dragonTypeList.filter(x => x.id != id);
            renderNavBar();
            break;  
        case 'clickDragon':
            this.model.incrementClicks(id)
            this.dragonView.render(this.model.dragons);
            break;
        case 'deleteDragon':
            this.model.deleteDragon(id);
            this.dragonView.render(this.model.dragons);
            break;
        default:
            console.log('in default');           
    }
  }

  getDragonImgSrc() {
      imgsrc = this.model.getDragonImgSrc()
      return imgsrc;
  }

  closeModal(dragonName, dragonImg, startClicks, background ) {
    event.preventDefault();
    if (this.model.dragonTypes.filter(x => x.dragonType === dragonType).length == 0) {  // dragonType is new
        console.log('about to addDragonType', dragonName, dragonImg, startClicks, background );
        dragonImg = document.querySelector('input[name="rad1"]:checked').value;
        this.model.addDragonType(dragonName, dragonImg, startClicks, background ) 
        this.renderNavBar();
        document.querySelector('#modal_content').classList.remove('modalOpacity')
        //closeModalDialog('.modalMask')
        document.querySelector('#modal_dialog').remove(); //style.visibility = "hidden";
        //document.querySelector("#modal_form").remove();
        //document.querySelector('#modal_dialog').remove();
    }
    return
  }

  uniqueDragonType(dragonType) {

    if (this.model.dragonTypes.filter(x => x.dragonType === dragonType).length > 0) {
        document.getElementById("msg").innerHTML="<B>Dragon Type is not unique</B>"
        document.getElementById("submitBtn").disabled = true;
    } else {
        document.getElementById("msg").innerHTML=""
        document.getElementById("submitBtn").disabled = false;
    } 
  }

}

  var controller = new Controller(new Model(), new NavBarView(), new DragonView());
  controller.renderNavBar();
