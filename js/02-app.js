//objeto con prototipos
function Cliente(nombre, saldo) {
    this.nombre = nombre;
    this.saldo = saldo;
}
const ismael = new Cliente('Isma', '900');
console.log(ismael);

//  Ncesitamos un ensaje de nopmbre del cliente y del saldo
function formatearCliente(cliente) {
    const {nombre, saldo} = cliente
    return `El nombre del usuario es ${nombre} y tiene un saldo de ${saldo}`;
}

console.log(formatearCliente(ismael))


//Empresas
function Empresa(nombre, saldo, vacantes) {
    this.nombre = nombre;
    this.saldo = saldo;
    this.vacantes = vacantes;
}

const empresa1 = new Empresa('GITHUB', 40000000, 2)

function formatearEmpresa(empresa) {
    const {nombre, saldo, vacantes} = empresa
    return `El nombre del usuario es ${nombre}, tiene un saldo de ${saldo} y tiene ${vacantes} vacantes`;
}

console.log(formatearEmpresa(empresa1));