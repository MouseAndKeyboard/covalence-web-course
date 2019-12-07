


let dice = [];

class Die {
    constructor(holderid, index) {

        this.holder = document.getElementById(holderid);
        this.div = document.createElement('div');
        this.div.classList.add('die');
        this.holder.appendChild(this.div);
        this.index = index;
        this.div.addEventListener('click', () => this.roll());

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
            dice.splice( dice.indexOf(this.value), 1 );
        });

        this.roll()

    }

    value;
    holder;

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.textContent = this.value;
    }
}

document.addEventListener("DOMContentLoaded", () => {


    let addDieBtn = document.getElementById('AddDie');
    addDieBtn.addEventListener('click', () => {
        let die = new Die('dieholder', dice.length);
        dice.push(die);
    });

    let rerollBtn = document.getElementById('Reroll');
    rerollBtn.addEventListener('click', () => {
        dice.forEach((die) => die.roll());
    });

    let sumBtn = document.getElementById('SumAll');
    sumBtn.addEventListener('click', () => {
        let sum = dice.reduce((acc, curr) => acc + curr.value, 0);
        alert(sum);
    });

});