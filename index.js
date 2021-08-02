class Model {
    constructor() {

            this.lastDragonTypeSelected = ""

            this.dragonTypeList = [
                'Earth',
                'Wind',
                'Fire',
                'Water',
                'Forest',
                'All'
            ];

            this.dragons = [{
                    id: 1,
                    dragonType: 'Earth',
                    class_name: 'earthDragon',
                    clicks: 0,
                    background: "#BFFCC6"
                },
                {
                    id: 2,
                    dragonType: 'Wind',
                    class_name: 'windDragon',
                    clicks: 0,
                    background: "#CBDFFD"
                },
                {
                    id: 3,
                    dragonType: 'Fire',
                    class_name: 'fireDragon',
                    clicks: 0,
                    background: "#F3FFE3"
                },
                {
                    id: 4,
                    dragonType: 'Water',
                    class_name: 'waterDragon',
                    clicks: 0,
                    background: "#E7FFAC"
                },
                {
                    id: 5,
                    dragonType: 'Forest',
                    class_name: 'forestDragon',
                    clicks: 0,
                    background: "#FFFFD1"
                },
                {
                    id: 6,
                    dragonType: 'Forest',
                    class_name: 'forestDragon',
                    clicks: 0,
                    background: "#FFFFD1"
                },
                {
                id: 7,
                dragonType: 'Earth',
                class_name: 'earthDragon',
                clicks: 0,
                background: "#BFFCC6"
                },
            ];
    }

    getNavList() {
        return this.dragonTypeList;
    }

    getDragonList() {
        return this.dragons
    }
    
    getDragonsByType(dragonType) {
        if (dragonType === 'All') {
            return (this.getNavList())
        } else {
            let list = [];        
            for (let i = 0; i < this.dragons.length; i++) {
                if (this.dragons[i].dragonType === dragonType) list.push(this.dragons[i]);    
            }
            return list;
        }
    }

    getDragon(id) { 
        let targetDragon = this.dragons.filter((dragon) => dragon.id === id)
        return targetDragon
    }

    getDragonType(id) {
        let dragon = this.dragons.filter(dragon => dragon.id === id)
        return dragon.dragonType; 
    }

    deleteDragon(id) {
        this.dragons = this.dragons.filter((dragon) => dragon.id !== id)
    }

    getClicks(id) {
        let dragon = this.dragons.filter((dragon) => dragon.id === id) 
        return dragon.clicks
    }

    incrementClicks(id) {
        for (let i = 0; i < this.dragons.length; i++) {
            if (this.dragons[i].id === id) {
                this.dragons[i].clicks++
                return(this.dragons[i].clicks)
            }
        }
    }

}

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

    dispatch(buttonClicked) {
        this.model.lastDragonTypeSelected = buttonClicked
        let dragonList = [];
        if (buttonClicked === 'All') {
            dragonList = this.model.getDragonList(buttonClicked)
        } else {
            dragonList = this.model.getDragonsByType(buttonClicked)
        }
        this.dragonView.render(dragonList, this.model.lastDragonTypeSelected)
    }

    incrementClicks(id) {
        this.model.incrementClicks(id);
        let dragonType = this.model.lastDragonTypeSelected
        let list = [] 
        if (dragonType === 'All') {
            list = this.model.dragons
        } else {
            list = this.model.getDragonsByType(dragonType)    
        }
        this.dragonView.render(list);
    }

    getClicks(id) {
        return(this.model.getClicks())
    } 
}

class NavBarView {
    constructor(controller) {
        this.controller = controller;
    }
    navBarViewFactory(list) {
        let html = ""
        let htmlStart = "<ul>"
        let  htmlEnd = "</ul>"
        for (let i = 0; i < list.length; i++) {
            html += `<li onclick='controller.dispatch("${list[i]}")'>${list[i]}</li>`
        }
        html = htmlStart + html + htmlEnd
        return(html)
    }

    renderNavBar(list) {
        let html = this.navBarViewFactory(list)
        let navbar = document.getElementById("navBar");
        navbar.innerHTML = html;
        return(navbar);
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
            <button onclick="controller.incrementClicks(${dragon.id})">
              <img src="${this.dragon_img}" class="${dragon.class_name}" alt="Dragon image"/>
            </button>
            <output id="click_count${dragon.id}" class="centered_text">Click count: ${dragon.clicks}</output>
          </div> 
      `
        return (dragonHTML);
    }

    render(list, lastSelected) {
        let dragon = {}
        let background = "white"
        if (list.length > 0 && lastSelected !== 'All') background = list[0].background
        
        let html = `<div id="button_collection" style="background-color:${background}">`

        for (let i = 0; i < list.length; i++) {
            dragon = list[i]
            html += this.dragonFactory(dragon)         
        }
        html += "</div>"
        attach_here.innerHTML = html; 
    }

    getCount(id) {
        dragons[id].clicks += 1;
        let output = document.querySelector(`"#click_count"${id}`);
        output.innerHTML = `Click count: ${dragons[id].clicks}`;
    }
}

var controller = new Controller(new Model(), new NavBarView(), new DragonView());
 controller.renderNavBar();
 controller.model.dragons;