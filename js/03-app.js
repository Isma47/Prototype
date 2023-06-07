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

//Intanciarlo
const pedro = new Cliente('Pedro', 10000);
pedro.tipoCliente();
pedro.tipoDeUsuario();
pedro.retiroTrajeta(10000)
console.log(pedro);


