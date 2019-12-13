


let dice : Array<Die> = [];

class Die {
    private div: HTMLDivElement;
    public value: number;
    constructor(private holder: HTMLElement, private index: number) {

        this.holder = holder;
        this.div = document.createElement('div');
        this.div.classList.add('die');
        this.holder.appendChild(this.div);
        this.div.addEventListener('click', () => this.roll());

        this.value = -1;
        this.roll();

        this.div.addEventListener('dblclick', () => {
            this.div.remove();

            dice.splice( dice.findIndex( die => die.value === this.value), 1 );
        });
    }

    roll() {
        this.value = Math.floor(Math.random() * 6) + 1;
        this.div.textContent = this.value.toString();
    }
}

document.addEventListener("DOMContentLoaded", () => {
    
    let addDieBtn = document.getElementById('AddDie');

    if (addDieBtn){
        addDieBtn.addEventListener('click', () => {

            let dieHolder = document.getElementById('dieholder');
            if (dieHolder){
                let die = new Die(dieHolder, dice.length);
                dice.push(die);
            }
            
        });
    }
    
    let rerollBtn = document.getElementById('Reroll');
    if (rerollBtn){
        rerollBtn.addEventListener('click', () => {
            dice.forEach((die) => die.roll());
        });
    }
    
    let sumBtn = document.getElementById('SumAll');
    if (sumBtn){
        sumBtn.addEventListener('click', () => {
            let sum = dice.reduce((acc, curr) => acc + curr.value, 0);
            alert(sum);
        });
    }
});