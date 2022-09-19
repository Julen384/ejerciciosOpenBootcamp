// Comparaciones

// Igualdad

if ( 5==5 ){
    console.log("5 es igual a 5")
}

if ( 5===5 ){
    console.log("5 es muy igual a 5")
}

let a = 5;
console.log(typeof a)
let b = "5";
console.log(typeof b)


// == SÓLO COMPARA EL VALOR.
// === COMPARA VALOR Y TIPO.
// EJEMPLOS:


if ( a == b ){
    console.log("a es igual a b - DÉBIL")
}

if ( a === b ){
    console.log("a es igual a b - FUERTE")
}

let c = 4;
let d = 10;

if (c!=d){
    console.log("c es diferente a d - DÉBIL")
}

if ( c === d ){
    console.log("c es igual a d - FUERTE")
}

// Comparaciones mayor que y menor que

let max = 10;
let min = 5;

if (max > min) {
    console.log("max es mayor que min")
}

if (max >= 10) {
    console.log("max es mayor o igual que min")
}

if (min < max) {
    console.log("min es menor que max")
}

if (min <= max) {
    console.log("min es menor o igual que max")
}





