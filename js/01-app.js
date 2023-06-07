//Objeto corriente
const cliente = {
    nombre: 'Juan',
    saldo: 500
}
console.log(cliente);

//objeto con prototipos
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const ismael = new Cliente('Isma', '900');
console.log(ismael);

const micha = new Cliente('micha', 400)
console.log(micha)