
document.addEventListener("DOMContentLoaded", () => {

    container = document.getElementById('squareContainer');

    class Square {
        constructor(x, y) {
            this.div = document.createElement('div');
            this.div.classList.add('square');
            this.div.style.left = `${x}px`
            this.div.style.top = `${y}px`
            this.updateSize();

            this.div.addEventListener('click', () => {
                this.updateLocation();
                this.updateColour();
                updateSize();
            });

            this.updateColour();
            container.appendChild(this.div)
        }

        updateLocation(){
            x = randint(0, 800);
            y = randint(0, 800);
            this.div.style.left = `${x}px`
            this.div.style.top = `${y}px`
        }

        updateColour() {
            let randomColor = `rgb(${randint(0, 255)}, ${randint(0, 255)}, ${randint(0, 255)})`;
            this.div.style.backgroundColor = randomColor
        }

        updateSize() {
            let w = randint(50, 250);
            this.div.style.width = `${w}px`;
            this.div.style.height = `${w}px`;
        }
    }

    let buttonAddSquare = document.getElementById('addsquare');
    buttonAddSquare.addEventListener('click', (e) => {
        e.preventDefault()
        x = randint(0, 800);
        y = randint(0, 800);
        let sq = new Square(x, y)
    });

    function randint(min, max) {
        return Math.floor(Math.random() * (max - min)) + min
    }
});