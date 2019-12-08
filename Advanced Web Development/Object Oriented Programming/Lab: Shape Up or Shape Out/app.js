function RandInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

class Shape {
    constructor(
        name,
        area,
        perimeter,
        width,
        height,
        radius) {
        this.name = name;
        this.width = width;
        this.height = height;
        this.radius = radius;
        this.area = area();
        this.perimeter = perimeter();

        this.div = document.createElement('div');

        this.div.addEventListener('click', () => {
            this.describe();
        });

        this.div.addEventListener('dblclick', () => {
            this.div.remove();
        })

        this.div.classList.add("shape");
        let drawZone = document.getElementById('draw-zone');
        drawZone.appendChild(this.div);
        this.radomPosition();
    }

    describe() {
        let nameZone = document.getElementById('objName');
        nameZone.textContent = this.name;

        let widthZone = document.getElementById('objWidth');
        widthZone.textContent = this.width;

        let heightZone = document.getElementById('objHeight');
        heightZone.textContent = this.height;

        let radiusZone = document.getElementById('objRadius');
        radiusZone.textContent = this.radius;

        let areaZone = document.getElementById('objArea');
        areaZone.textContent = this.area;

        let perimeterZone = document.getElementById('objPerimeter');
        perimeterZone.textContent = this.perimeter;
    }

    radomPosition() {
        let x = RandInt(0, 101);
        let y = RandInt(0, 101);

        this.div.style.left = `${x}%`;
        this.div.style.top = `${y}%`;
    }
}

class Circle extends Shape {
    constructor(r) {
        super(
            'Circle',
            () => Math.PI * (r ** 2),
            () => Math.PI * r * 2,
            '-',
            '-',
            r
        );
        this.div.classList.add('circle');
        this.div.style.width = `${r/2}px`;
        this.div.style.height = `${r/2}px`;
        this.div.style.backgroundColor = 'purple'
    }

}

class Triangle extends Shape {
    constructor(h) {
        super(
            'Triangle',
            () => h * h / 2,
            () => h * 2 + Math.sqrt(h**2 * 2),
            '-',
            h,
            '-'
        );
        
        this.div.style.borderBottomWidth = `${h}px`;
        this.div.style.borderRightWidth = `${h}px`;
        this.div.style.borderBottomColor = 'yellow'

        this.div.classList.add('triangle');
        
    }

}

class Rectangle extends Shape {
    constructor(w, h) {
        super(
            'Rectangle',
            () => w * h,
            () => 2 * w + 2 * h,
            w,
            h,
            '-'
        );
        this.div.classList.add('rectangle');
        this.div.style.width = `${w}px`;
        this.div.style.height = `${h}px`;
        this.div.style.backgroundColor = 'green'
    }
}

class Square extends Shape {
    constructor(l) {
        super(
            'Square',
            () => l ** 2,
            () => l * 4,
            l,
            l,
            '-'
        );
        this.div.classList.add('square');
        this.div.style.width = `${l}px`;
        this.div.style.height = `${l}px`;
        this.div.style.backgroundColor = 'red'
    }
}


document.addEventListener("DOMContentLoaded", () => {
    let circleInsertBtn = document.getElementById('circleBtn');
    circleInsertBtn.addEventListener('click', () => {
        let rHolder = document.getElementById('circleRadius');
        let r = rHolder.value;
        let c = new Circle(r);
    });

    let triangleInsertBtn = document.getElementById('triangleBtn');
    triangleInsertBtn.addEventListener('click', () => {
        let hHolder = document.getElementById('triangleHeight');
        let h = hHolder.value;
        let t = new Triangle(h);
    });

    let rectangleInsertBtn = document.getElementById('rectangleBtn');
    rectangleInsertBtn.addEventListener('click', () => {
        let hHolder = document.getElementById('rectHeight');
        let wHolder = document.getElementById('rectWidth');
        let h = hHolder.value;
        let w = wHolder.value;
        let r = new Rectangle(w, h);
    });

    let squareInsertBtn = document.getElementById('squareBtn');
    squareInsertBtn.addEventListener('click', () => {
        let lHolder = document.getElementById('squareSideLength');
        let l = lHolder.value;
        let sq = new Square(l);
    });
});