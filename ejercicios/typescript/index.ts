// //Boolean
// let muted: boolean = true;
// muted = false;

import { networkInterfaces } from "os";

// //Numeros
// let age = "6";
// let numerador:number =42;
// let denominador:number = parseInt(age);
// let resultado = numerador/denominador;

// //String
// let nombre: string = "Richard";
// let saludo = `Me llamo ${nombre}`;


// //Arrays
// let people: string[] = [];
// people = ["Isabel","Nicole","Raul"];
// // people.push("900");

// let peopleAndNumbers: Array<string | number> = []
// peopleAndNumbers.push("Ricardo");
// peopleAndNumbers.push(100);

// //Enum

// enum Color{
//     Rojo = "Rojo",
//     Verde = "verde",
//     Azul = "Azul",
//     Amarillo = "Amarillo"
// }

// let colorFavorito: Color = Color.Amarillo;
// console.log(`Mi color favorito es ${colorFavorito}`);

// //Any

// let comodin:any = "Joker";
// comodin = {type: "Wildcard"};

// //Object
// let someObject:object = {
//     type: "Wildcard"
// }

//Funciones




// function fullName(firstName:string, lastName:string = "Smith"):string{
//     return `${firstName} ${lastName}`
// }

// const richard = fullName("Richard");
// console.log(richard);



//Interfaces

enum Color{
    rojo = "Rojo",
    verde= "verde"
}
interface Rectangulo{
    ancho:number;
    alto: number;
    color?: Color;
}

let rect:Rectangulo = {
    ancho: 4,
    alto: 6
    // color: Color.rojo
};

function area(r:Rectangulo){
    return r.ancho*r.alto

}

const areaTect = area(rect);
console.log(areaTect);


rect.toString= function (){
    return this.color? `Un rectangulo ${this.color}`: "Un rectangulo";
}


console.log(rect.toString());