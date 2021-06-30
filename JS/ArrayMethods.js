const ArrayMethods = {
    dias: ["Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"],
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
        let totalPuntos = this.equipos.reduce((puntaje, equipo) =>  puntaje + equipo.puntaje, 0 );

        console.log(`Total puntaje equipos: ${totalPuntos}`);
    },
    init() {
        console.log('<---- START findIndexMethod ---->');
        this.findIndexMethod();

        console.log('<---- START findIndexMethod2 ---->');
        this.findIndexMethod2();

        console.log('<---- START reduceMethod ---->');
        this.reduceMethod();
    }
};

ArrayMethods.init();
