//objeto con prototipos
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}

//Agregar propotipo

Cliente.prototype.tipoCliente = function(){
    return console.log(`El cliente es ${this.nombre} y tiene de saldo ${this.saldo}`)
}

Cliente.prototype.tipoDeUsuario = function(cliente){

    if(this.saldo > 1000) {
        console.log(`El usuario ${this.nombre} tiene saldo de ${this.saldo} es usuario premium`);
    } else if(this.saldo > 600) {
        console.log(`El usuario ${this.nombre} tiene saldo de ${this.saldo} es usuario platinum`);
    } else {
        console.log(`El usuario ${this.nombre} tiene saldo de ${this.saldo} es usuario basico`);
    }
}

Cliente.prototype.retiroTrajeta = function (retiro) {
    this.saldo -= retiro
}

//Asi heredo las propiedades de la funcion contrcutora Cliente 
function DatosCliente(nombre, saldo, telefono) {
    Cliente.call(this, nombre, saldo);
    this.telefono = telefono;
}
//Aqui herede los prototipos cuando
DatosCliente.prototype = Object.create(Cliente.prototype);

DatosCliente.prototype.formulario = function() {
    console.log(`El cliente ${this.nombre}, tiene un saldo de ${this.saldo} y su telefono es ${this.telefono}`)
}
const datos1 = new DatosCliente('Juan', 100000, 4767345367);
console.log(datos1);

datos1.formulario();