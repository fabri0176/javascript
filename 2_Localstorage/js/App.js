const app = {
    formulario: undefined,
    tablaMensajes: undefined,
    agregar(e) {
        e.preventDefault();
        const title = document.querySelector('#title');
        const msg = document.querySelector('#msg');
        const id = document.querySelector('#id');
        let tweet = {
            title: title.value,
            msg: msg.value,
            id: id.value,
        };


        title.value = '';
        msg.value = '';
        id.value = '';

        app.setTweets(tweet);
        app.listar();
    },
    setTweets(tweet = {}) {
        let tweets = this.getTweets(); //Obtener tweets de localstorage

        if(tweet.id != "" && tweet.id != null  && tweet.id != undefined){ // EDITAR
            const index = this.getTweetIndexById(tweet.id);
            tweets[index] = tweet;
        }else{ //CREAR
            const id = this.getNextId(); //Asignar id 
            tweet.id = id; // agregar id al objeto
            tweets = [...tweets, tweet]; //Agregar tweet al consolidado
        }

    
        

        localStorage.setItem('tweets', JSON.stringify(tweets)); //Asignar en localstorage
    },
    getTweets() {
        let tweets = JSON.parse(localStorage.getItem('tweets'));

        if (tweets === null) {
            return [];
        }

        return tweets;
    },
    eliminarAction(element) {
        const id = element.getAttribute('data-id'); //ID Tweet
        this.eliminar(id);
        this.listar();
    },
    eliminar(id) {
        let tweets = this.getTweets();
        tweets = tweets.filter(tweet => {
            if (tweet.id != id) {
                return true;
            }
            return false;
        }, id);
        console.log(tweets);


        localStorage.setItem('tweets', JSON.stringify(tweets)); //Asignar en localstorage
    },
    editarAction(element) {
        const id = element.getAttribute('data-id'); //ID Tweet
        this.editar(id);
    },
    editar(id) {
        let tweet = this.getTweetById(id);
        if (tweet == undefined) {
            return;
        }

        document.querySelector('#title').value = tweet.title;
        document.querySelector('#msg').value = tweet.msg;
        document.querySelector('#id').value = tweet.id;

    },
    getTweetById(id) {
        let tweets = this.getTweets();
        return tweets.find(tweet => tweet.id == id);

    },
    getTweetIndexById(id) {
        let tweets = this.getTweets();
        return tweets.findIndex(tweet => tweet.id == id);

    },
    getTablaMensajes() {
        return this.tablaMensajes.getElementsByTagName('tbody')[0];
    },
    listar() {
        this.limpiarTabla();
        console.log('Listar');
        const tweets = this.getTweets();
        console.log(tweets);
        const tbody = this.getTablaMensajes();

        let bodyHtml = '';
        tweets.forEach((tweet, index) => {
            bodyHtml += `<tr>
                            <td>${tweet.id}</td>
                            <td>${tweet.title}</td>
                            <td>${tweet.msg}</td>
                            <td>
                                <div class="btn-group" role="group" aria-label="Basic mixed styles example">
                                    <button type="button" class="btn btn-warning" data-id='${tweet.id}' onclick="app.editarAction(this)">Editar</button>
                                    <button type="button" class="btn btn-danger" data-id='${tweet.id}' onclick="app.eliminarAction(this)">X</button>
                                </div>
                            </td>
                        </tr>`;
        });

        tbody.innerHTML = bodyHtml;
    },
    limpiarTabla() {
        const tbody = this.getTablaMensajes();
        tbody.innerHTML = '';
    },
    registrarEventos() {
        this.formulario.addEventListener('submit', this.agregar);
    },
    cargarVariables() {
        this.formulario = document.querySelector('#formAddLocalStorage');
        this.tablaMensajes = document.querySelector('#tablaMensajes');
    },
    getNextId() {

        let id = 1;
        let tweets = this.getTweets();
        if (tweets.length === 0) { //Primer elemento
            return id;
        }

        tweets.sort((a, b) => parseFloat(b.id) - parseFloat(a.id));
        id = parseInt(tweets[0].id) + 1;
        return id;

    },
    init() {
        console.log('INIT');
        this.cargarVariables();
        this.registrarEventos();
        this.listar();
    }
};

window.onload = function () {
    app.init();
};