// Ahora pasemos a otra tarea. Aquí te pasamos una cadena para trabajar.

let myString = 'Javascript+es+super+cool'

// 1.Convierta la cadena en un array, eliminando los caracteres + en el proceso.
// 2.Guarde el resultado en una variable llamada myArray.
let myArray = myString.split('+');
console.log(myArray);

// 3.Almacene la longitud del array en una variable llamada arrayLength.
let arrayLength = myArray.length;
console.log(arrayLength);

// 4.Almacene el último elemento del array en una variable llamada lastItem.
let lastItem = myArray.slice(-1);
//let lastItem = myArray[myArray.length-1];
console.log(lastItem);

// 5.Crea un nuevo array que tenga los elementos ordenados en orden inverso que myArray. Almacenalos en un una variable llamada myInverseArray.
let myInverseArray = myArray.reverse();
console.log(myInverseArray);

// 6.Agrega un elemento al final de myInverseArray.
myInverseArray.push("Array");
console.log(myInverseArray);
