const Loops = {
    carrito: [
        { nombre: 'Bicicleta', precio: 3200000 },
        { nombre: 'Carro', precio: 23500000 },
        { nombre: 'Moto', precio: 12000000 },
        { nombre: 'Nevera', precio: 1850000 },
        { nombre: 'Bus', precio: 350000000 },
    ],
    forMethod() {
        let impar;
        for (let iterator = 0; iterator < 10; iterator++) {
            impar = iterator % 2 == 0 ? 'SI' : 'NO';
            console.log(`Número: ${iterator}. es impar? ${impar}`);
        }
    },
    forCarrito() {
        for (let iterator = 0; iterator < this.carrito.length; iterator++) {
            if (this.carrito[iterator].precio <= 0) {
                continue;
            }
            console.table(this.carrito[iterator]);
        }
    },
    forEachMethod() {
        this.carrito.forEach((value, index) => {
            console.log(index);
            console.log(value);
        });
    },
    forOfMethod() {
        for (let carritoTmp of this.carrito) {
            console.log(carritoTmp);
        }

        for ([index,value] of Object.entries(this.carrito)) {
            console.log(`Carrito ID [${index}]] = ${JSON.stringify(value)}`);
        }
    },
    forInMethod() {
        for (let carritoTmp in this.carrito) {
            console.log(carritoTmp);
        }
    },
    init() {
        console.log('<---- START forInMethod ---->');
        this.forInMethod();

        console.log('<---- START forOfMethod ---->');
        this.forOfMethod();

        console.log('<---- START forEachMethod ---->');
        this.forEachMethod();

        console.log('<---- START forMethod ---->');
        this.forMethod();

        console.log('<---- START forCarrito ---->');
        this.forCarrito();

    }
};


Loops.init();
