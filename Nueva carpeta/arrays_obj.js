var javier = {
    nombre: "Javier",
    edad: 23,
    peso: 80,
    estatura: 1.7
}
var sara = {
    nombre: "Sara",
    edad: 20,
    peso: 60,
    estatura: 1.6
}
var dennis = {
    nombre: "Dennis",
    edad: 35,
    peso: 65,
    estatura: 1.5
}
var jonathan = {
    nombre: "Jonathan",
    edad: 32,
    peso: 80,
    estatura: 1.74
}

var personas = [javier, sara, dennis,jonathan]

function nombreMayusculas({nombre}) {
    console.log(nombre.toUpperCase())
}

const esMayorDeEdad = ({edad}) => edad >= 18

function mayorDeEdad (persona) {
    if( esMayorDeEdad(persona)){
        console.log("es mayor de edad")
    }
    else{
        console.log("es menor de edad")
    }
}

const meta = javier.peso - 2
const aumentarPeso = persona => persona.peso += 0.5
const adelgazar = persona => persona.peso -= 0.3
const comeMucho = () => Math.random()  < 0.3
const deporte = () => Math.random()  > 0.4


var dias = 0

while (javier.peso > meta){
    if(comeMucho()){
        aumentarPeso(javier)
    }
    if(deporte()){
        adelgazar(javier)
    }
    dias += 1
}

console.log(`Pasaron ${dias} Días`)


const filtrado = personas => personas.estatura > 1.65

var personasAltas = personas.filter(filtrado)


const cambioAltura = persona => {
    return {
        ...persona,
        altura: persona.estatura * 100
    }
}

var alturaCms = personas.map(cambioAltura)
console.log(alturaCms)

const reducer = (acum, { edad}) => acum + edad

var totalEdades = personas.reduce(reducer, 1)

console.log(`Las edades suman un total de ${totalEdades} años`)

class persona {
    constructor(nombre, edad, peso, estatura){
        this.nombre = nombre
        this.edad = edad
        this.peso = peso
        this.estatura = estatura
    }
    saludo (fn){
        console.log(`Hola, mi nombre es ${this.nombre}`)
        if (fn){
            fn(false)
        }
    }
    alto(){
        if(this.estatura >= 1.7){
            console.log(`Soy alt@`)
        }
        else{
            console.log(`Soy baj@`)
        }
    }
}

class desarrollador extends persona {
    constructor (nombre, edad, peso, estatura){
        super(nombre, edad, peso, estatura)
    }
    saludo(fn){
        console.log(`Hola, mi nombre es ${this.nombre}`)
        console.log("Y soy desarrollador/a")
        if (fn){
            fn(true)
        }
    }
}

function respuestaSaludo(esDev){
    console.log(`Buenos días`)
    if(esDev){
        console.log(`Ah, no sabía que eras Dev`)
    }
}

var candida = new persona("candida", 63, 60, 1.6)
var pedro = new persona("pedro", 25, 80, 1.9)
var juana = new desarrollador("juana", 22, 60, 1.65)

juana.saludo(respuestaSaludo) //Llamado de la función como parámetro
