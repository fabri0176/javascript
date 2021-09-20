//Agregar valores al local Storage
localStorage.setItem('nombres', 'Nestor Fabricio');
localStorage.setItem('apellidos', 'Parra Gonzalez');
localStorage.setItem('email', 'fabri0176@gmail.com');
localStorage.setItem('json', JSON.stringify({ name: 'test', id: 1 }));
localStorage.setItem('meses', JSON.stringify(["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio"]));

//Obetener

const meses = localStorage.getItem('meses');
const none = localStorage.getItem('none');

console.log(meses);
console.log(none);

//localStorage.clear();//BORRAR
