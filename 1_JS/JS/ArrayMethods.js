const ArrayMethods = {
    dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
    festivos: ["Lunes Festivo", "Martes Festivo", "Miercoles Festivo", "Jueves Festivo", "Viernes Festivo", "Sabado Festivo", "Domingo Festivo"],
    equipos: [
        { pais: 'Colombia', puntaje: 4, },
        { pais: 'Brasil', puntaje: 7, },
        { pais: 'Ecuador', puntaje: 4, },
        { pais: 'Peru', puntaje: 6, }
    ],
    findIndexMethod() {
        const index = this.dias.findIndex(dia => dia === 'Jueves');

        let msg = `El indice del día Jueves ${index}`;

        if (index === -1) {
            msg = "No existe el día Jueves";
        }

        console.log(msg);
    },
    findIndexMethod2() {
        const index = this.equipos.findIndex(equipo => equipo.pais === 'Ecuador');

        let msg = `El indice del equipo Ecuador ${index}`;

        if (index === -1) {
            msg = "No existe el equipo Ecuador";
        }

        console.log(msg);
    },
    reduceMethod() {
        //Suma de puntaje de todos los equipos
        let totalPuntos = this.equipos.reduce((puntaje, equipo) => puntaje + equipo.puntaje, 0);

        console.log(`Total puntaje equipos: ${totalPuntos}`); // Total puntaje equipos: 21
    },
    filterMethod() {
        let resultado = this.equipos.filter(equipo => equipo.puntaje >= 6);

        console.log('Equipos clasificados con más de 5 puntos');
        console.log(resultado);
    },
    findMethod() {
        const result ='' this.equipos.find(equipo => equipo.pais == 'Colombia');''
        console.log(result); // {pais: "Colombia", puntaje: 4}
    },
    everyMethod() {
        const result = this.equipos.every(equipo => equipo.puntaje > 3) ? 'SI' : 'NO';

        console.log(`Todos los equipos cumplen el puntaje mayor a 3? ${result}`); // Todos los equipos cumplen el puntaje mayor a 3? SI
    },
    concatMethod() {
        const concatenacion = this.dias.concat(this.festivos); 

        console.log(concatenacion); //["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo", "Lunes Festivo", "Martes Festivo", "Miercoles Festivo", "Jueves Festivo", "Viernes Festivo", "Sabado Festivo", "Domingo Festivo"]
    },
    spreadOperatorMethod() {
        console.log(["Ejemplo", ... "test", ... this.dias, ...this.festivos ]); 
        // ["Ejemplo", "t", "e", "s", "t", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo", "Lunes Festivo", "Martes Festivo", "Miercoles Festivo", "Jueves Festivo", "Viernes Festivo", "Sabado Festivo", "Domingo Festivo"]
    },
    init() {
        console.log('<---- START findIndexMethod ---->');
        this.findIndexMethod();

        console.log('<---- START findIndexMethod2 ---->');
        this.findIndexMethod2();

        console.log('<---- START reduceMethod ---->');
        this.reduceMethod();

        console.log('<---- START filterMethod ---->');
        this.filterMethod();

        console.log('<---- START findMethod ---->');
        this.findMethod();

        console.log('<---- START everyMethod ---->');
        this.everyMethod();

        console.log('<---- START concatMethod ---->');
        this.concatMethod();

        console.log('<---- START concatSpreadOperator ---->');
        this.spreadOperatorMethod();
        
    }
};

ArrayMethods.init();
