
/*var numero = 23; //variable numérica.
var nombre = "javier"; // variable string.
var estado = false; // variable boolean.

var elementos = ["laptop", "celular", "watch", "audifonos"]; //array
var persona = {       
    nombre = "javier",      
    edad = 23
};  //objet

//funciones

function funcionDeclarativa (){
    return 0;
}

var funcionExpresiva = function(){
    return 0;
}

var nombreCompleto =  `${nombre} ${apellido}`;

var str = nombre.substr(1,4);

var nombre = "javier", edad = 23;

function imprimirEdad(n,e){
    console.log(`${n} tiene ${e} años`);
}

imprimirEdad( nombre, edad);

function imprimirNombre(){
    nombre = nombre.toUpperCase();
    console.log(nombre);
};

var persona = {
    nombre: "javier",
    apellido: "sanguino",
    edad: 23
}

function nombreMayusculas ({nombre}){
    console.log(nombre.toUpperCase())
}

nombreMayusculas (persona);*/

var numero = 15;

var javier = {
    nombre: "javier",
    apellido: "sanguino",
    edad: 23,
    peso: 90
}

function nombreMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}

//nombreMayusculas (persona);

const esMayorDeEdad = ({edad}) => edad >= 18

function mayorDeEdad (persona) {
    if( esMayorDeEdad(persona)){
        console.log("es mayor de edad")
    }
    else{
        console.log("es menor de edad")
    }
}

/*for ( i = 1; i <= 15; i++){
    console.log(i)
}*/

/*
const meta = javier.peso - 1
const aumentarPeso = persona => persona.peso += 0.5
const adelgazar = persona => persona.peso -= 0.3
const comeMucho = () => Math.random() < 0.3
const deporte = () => Math.random() < 0.4


var dias = 0

while (javier.peso < meta){
    if(comeMucho(javier)){
        aumentarPeso(javier)
    }
    if(deporte(javier)){
        adelgazar(javier)
    }
    dias += 1
}

console.log(`Pasaron ${dias} Días`)*/

/*var contador = 0

const llueve = () => Math.random() < 0.25

do{
    contador++
}while(!llueve())

if(contador === 1){
    console.log(`Fui a ver si llovia ${contador} vez`)
}
else if (contador > 1){
    console.log(`Fui a ver si llovia ${contador} veces`)
}*/

var signo = prompt("Cual es tu signo")

switch(signo){
    case "tauro": 
        console.log(`Cool signo`)
        break
    default:
        console.log(`Lastima`)
        break
}