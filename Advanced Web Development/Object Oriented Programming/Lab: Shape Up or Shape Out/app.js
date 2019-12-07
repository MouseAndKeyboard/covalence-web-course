
class Shape {
    constructor(name){
        this.name = name;
        this.div = document.createElement('div');
        this.div.addEventListener('click', () => {
            this.describe();
        });
        this.div.className = "test"

        let drawZone = document.getElementById('draw-zone');
        drawZone.appendChild(this.div);
    }

    describe(){
        let nameZone = document.getElementById('objName');
        nameZone.textContent = this.name;
    }

    calculateArea(){

    }

    calculatePerimeter(){

    }

}


document.addEventListener("DOMContentLoaded", () => {
    new Shape('test')
});