const app = {
    formulario: undefined,
    tablaMensajes: undefined,
    agregar(e) {
        e.preventDefault();
        console.log(e);
    },
    eliminar() {

    },
    listar() {

    },
    registrarEventos() {
        this.formulario.addEventListener('submit', this.agregar);
    },
    cargarVariables() {
        this.formulario = document.querySelector('#formAddLocalStorage');
        this.tablaMensajes = document.querySelector('#tablaMensajes');
    },
    init() {
        console.log('INIT');
        this.cargarVariables();
        this.registrarEventos();
    }
};

window.onload = function () {
    app.init();
};