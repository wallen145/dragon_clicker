class Model {
  constructor() {

        this.dragon_images = [
            './images/dragon_221-2217507.png',
            './images/dragon_emoji.jpg',
            './images/dragon-154565_1280.png',
            './images/dragonimg.png'
        ];

        this.dragonTypes = [
            {
                id: 1,
                dragonType: 'Earth',
                class_name: 'earthDragon',
                clicks: 0,
                level: 0,
                background: "#BFFCC6",
                imgsrc: this.dragon_images[1],
            },
            {
                id: 2,
                dragonType: 'Wind',
                class_name: 'windDragon',
                clicks: 0,
                level: 0,
                background: "#CBDFFD",
                imgsrc: this.dragon_images[1],
            },
            {
                id: 3,
                dragonType: 'Fire',
                class_name: 'fireDragon',
                clicks: 0,
                level: 0,
                background: "#F3FFE3",
                imgsrc: this.dragon_images[1],
            },
            {
                id: 4,
                dragonType: 'Water',
                class_name: 'waterDragon',
                clicks: 0,
                level: 0,
                background: "#E7FFAC",
                imgsrc: './images/dragon-154565_1280.png',
            },
            {
                id: 5,
                dragonType: 'Forest',
                class_name: 'forestDragon',
                clicks: 0,
                level: 0,
                background: "#FFFFD1",
                imgsrc: this.dragon_images[1],
            },
        ];

        this.dragons = [];
        this.lastDragonTypeId = 5;
        this.lastDragonId = 0;

  }

    getArrIdx(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].id == id) {
                return(i)
            }
        }
    }
    
    addDragonType(dragonName, dragonImg, startClicks, background ) {
        console.log('addDragonType parameters: ', dragonName, dragonImg, startClicks, background)
        if (this.dragonTypes.filter(x => x.dragonType === dragonName).length == 0) {
            this.lastDragonTypeId += 1
            let newDragonType = {
                id:  this.lastDragonTypeId,
                dragonType: dragonName,
                class_name: '${dragonName}Dragon',
                clicks: startClicks,
                level: 0,
                background: background,
                imgsrc: this.dragon_images[1],
            }
            this.dragonTypes.push(newDragonType)
        }
    }

    addDragon(id) {
        this.lastDragonId = this.lastDragonId + 1
        let idx = this.getArrIdx(id, this.dragonTypes);
        let newDragon = {
            id: this.lastDragonId,
            dragonType: this.dragonTypes[idx].dragonType,
            class_name: this.dragonTypes[idx].class_name,
            clicks: 0,
            level: 0,
            background: this.dragonTypes[idx].background,
            imgsrc: this.dragonTypes[idx].imgsrc        
        }
        this.dragons.push(newDragon)
    }

    getNavList() {
        return this.dragonTypes
    }

    getDragonList() {
        return this.dragons
    }

    getDragonList(dragonType) {
    return this.dragons;
    }

    getDragonImgSrc() {
        let randomIndex = Math.floor((Math.random() * this.dragon_images.length));
        return this.dragon_images[randomIndex]
    }

    getDragon(id) { 
        let targetDragon = this.dragons.filter((dragon) => dragon.id == id)
        return targetDragon
    }

    getDragonType(id) {
        let dragon = this.dragons.filter(dragon => dragon.id == id)
        return dragon.dragonType; 
    }

    deleteDragon(id) {
        this.dragons = this.dragons.filter((dragon) => dragon.id != id)
    }

    getClicks(id) {
        let dragon = this.dragons.filter((dragon) => dragon.id == id) 
        return dragon.clicks
    }

    incrementClicks(id) {
        let idx = this.getArrIdx(id, this.dragons)
        this.dragons[idx].clicks++
        this.incrementLevels(idx)
        return
    }

    incrementLevels(idx) {
        if (this.dragons[idx].clicks % 5 === 0) {
            this.dragons[idx].level++;  
        }        
    }

    deleteDragon(id) {
        this.dragons = this.dragons.filter( d => d.id !== id)
    }

}
