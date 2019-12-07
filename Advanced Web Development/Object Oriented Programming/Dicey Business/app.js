class Die {
    constructor(holderid){

        this.holder = document.getElementById(holderid);
        this.div = document.createElement('div');
        this.holder.appendChild(this.div);
        this.roll()
        
    }

    value;
    holder;
    
    roll(){
        this.value = Math.floor(Math.random() * 5) + 1;
        this.div.textContent = this.value;
    }
}



document.addEventListener("DOMContentLoaded", () => {
    let die = new Die('dieholder');
    
});