/** Ejercicio 1  *   
*
* 1. Elabora un programa que determine 
* si una persona tiene edad suficiente para votar 
* 2. Debe recibir como parametro la edad
* 3. Consideraciones: utilizar la estructura if-else  
*/ 
// let Edad = 15

// if (Edad>= 18){
//     console.log("Tiene edad para votar")    
// } else {
//     console.log("No tiene edad para botar");
// }

/////////////////////////////////////////////////////////

/** Ejercicio 2  *   
 * 
* 1. Desarrolla un programa que permita obtener el promedio
* de un/a alumno/a recibiendo como parametro 4 calificaciones
* 2. Si el promedio es aprobatorio (mayor o igual a 7) imprimir aprobado
* en el caso de que no sea un promedio aprobatorio imprimir reporobado
* 3. Consideraciones: utilizar la estructura if-else   
* 
*/
// function promedio(a, b, c, d){
//     let final = ((a + b + c + d)/4)
//     return final
// }
// let final = promedio(5, 5, 8, 8)

// if(final>= 7){
//     console.log("Aprobado")
// } else{
//     console.log("Reprobado")
// }

////////////////////////////////////////////////////////

/** Ejercico 4  *
 * 
 * 1. Desarrolla un programa que evalue si un umero es divisible 
 * entre 7 y 8
 * 2. Debe recibir como parametro un numero cualquiera
 * 3. Si se cumple imprimir verdadero / Si no imprimir falso
 * 4. Consideracion - Utiliza if-else
 * 5. Casos de prueba: 56, 7, 8, 0, 224, 73
 */

// let userInput = prompt("Introduzca un numero: ")
//     userInput = Number(userInput)

// function getUserInput(n){
//     return n
// }
// if (getUserInput(userInput) %7 === 0 && 8 === 0){
//     console.log("Verdadero");
// } else {
//     console.log("Falso");
// }

//////////////////////////////////////////////////////////////////

/** Ejercicio 5  *   
* 1. Desarrolla un programa que evalue 
* si un numero es divisible entre 4 o 9
* 2. Debe recibir como parametro un numero aleatorio
* 3. Si se cumple, imprimir verdadero / Si no, imprimir falso 
* 4. Consideracion - Utilizar la estructura if-else 
*/
// let div = 36

// if(((div)%4 === 0)||((div)%9 === 0)){ 
//     console.log("Verdadero");
// } else {
//     console.log("Falso");
// }

////////////////////////////////////////////////////////////////

/** Ejercicio 6
 * 
 * Crear un programa que funcione como una calculadora simple
 * que realice las operaciones aritmeticas basicas
 * 
 *  -suma
 *  -resta
 *  -multiplicacion
 *  -division
 * 
 * Debe recibir como parametros la operacion a realizar y dos numeros
 * Dependiendo de la opcion que se indique, realizar la operacion correspondiente
 * 
 * 1. suma
 * 2. resta
 * 3. multiplicacion
 * 4. division
 * 
 * Consideraciones: utilizar la estructura switch
 */

// function calculadora(operacion, num1, num2) {
//     switch (Number(operacion)) {
//         case 1:
//             console.log(`La suma de ${num1} y ${num2} es: ${Number(num1) + Number(num2)}`)            
//             break;
//         case 2:
//             console.log(`La resta de ${num1} y ${num2} es: ${Number(num1) - Number(num2)}`)            
//             break;
//         case 3:
//             console.log(`La multiplicacion de ${num1} y ${num2} es: ${Number(num1) * Number(num2)}`)                            
//             break;
//         case 4:
//             console.log(`La divicion de ${num1} y ${num2} es: ${Number(num1) / Number(num2)}`)            
//             break;
//         default:
//             console.log("introduce un numero valido");
//             break;
//     }
// }

// let operacion = prompt(
//     `Elije la operacion a realizar: 
//     1. Suma
//     2. Resta
//     3. Multiplicacion
//     4. Division`)
    
//     let num1 = prompt("ingresa el primer numero")
//     let num2 = prompt("ingresa el segundo numero")
//     calculadora(operacion, num1, num2)


///////////////////////////////////////////////////////////////////

/** Ejercicio 7
 * 
 * Realizar un programa que reciba como parametro una categoria de peliculas
 * 
 * -accion
 * -drama
 * -comedia
 * -romance
 * -suspenso
 * -terror
 * 
 * Segun sea la categoria que se reciba, imprimir una recomendacion de pelicula
 * de acuerdo al parametro recibido
 * 
 * Consideraciones: utilizar la estructura switch
 */

// let categoria = parseInt(prompt(
//     "Elige una catergoria de pelñiculas y recibiras una recomendacion:/n1.-Action/n2.-Drama/n3.-Comedia/n4.-Romance/n5.-Suspenso/n6.-Terror/n7.-Salir"))

//     if (categoria > 1 && categoria < 7) {
//         switch (categoria) {
//             case 1:
//                 console.log("John Wick");
//                 break;
//             case 2:
//                console.log("The Machinist");
//                 break;
//             case 3:
//                 console.log("Amelie");
//                 break;
//             case 4:
//                 console.log("El lado oscuro del corazon");
//                 break;
//             case 5:
//                 console.log("The silence of the lambs");
//                 break;
//             case 6:
//                 console.log("El titere");
//                 break;
//             case 7:
//                 console.log("Adios");
//                 break;
//             default:
//                 console.log("Seleccion invalida");
                
//                 break;
//         }
        
//     } else {
//         console.log("Seleccion invalida, intenta con otra");
        
//     }


//////////////////////////////////////////////////////////////////////

/** Ejercicio 8
 * 
 * Crear una interfaz de un cajero ATM
 * 
 * Debe recibirse como parametro alguna de las siguientes opciones
 * 
 * 1. Retirar dinero
 * 2. Transferencia
 * 3. Deposito
 * 4. Pago de servicios
 * 
 * Segun sea la opcion indicada, imprimir en pantalla la accion a realizar
 * Utilizar if/else
 */
// let cajero = prompt("Introduzca el movimiento a realizar: /n 1 Retiro /n 2 Trasferencia /n 3 Deposito /n 4 Pago de servicios")
// if (cajero == 1) {
//     console.log("Retiro");
// } else if (cajero == 2){
//     console.log("Trasferencia");
// } else if (cajero == 3){
//     console.log("Desposito");
// } else if (cajero == 4){
//     console.log("Pago de servicios");
// }

////////////////////////////////////////////////////////////////////////

/** Ejercicio 9
 * 
 * Desarrolla una función que, imprima todos los numeros del 0 al 100 y compare 
 * que numeros son divisibles entre 4 o 9
 * 
 * Consideraciones
 * Asignarle un nombre significativo a la función declarada
 * Si el numero es divisible entre 4, imprimir un mensaje alusivo a costado del numero
 * Mismo caso para todos los numeros divisibles entre 9
 */

// function divCuatroNueve(){
//     for (i = 0; i < 101; i++){
//     if (i / 4 == 0 && i / 9 == 0){
//         console.log(i + " Es divisible entre 4 y 9");    
//     }else{
//     if (i % 4 == 0){
//         console.log(i + " Es divisuble entre 4");    
//     }else if (i % 9 == 0){
//      console.log(i + " Es divisible entre 9");   
//     }else {
//         console.log(i);
//     }
//     }
//     }
// }

// divCuatroNueve(150)

///////////////////////////////////////////////////////////////////////

/** Ejercicio 10
 * 
 * Declara una variable y asignale como valor un arreglo vacio
 * Elabora una iteracion que ayude a llenar el arreglo con los numeros del 1 al 10
 * Al final, e debera obtener un arreglo con los numeros ordenados de manera descendente
 * (10 - 1)
 * 
 * Consideraciones
 * Asigna un nombre significativo a la variable
 * Utiliza el metodo para arreglos adecuado para cumplir con el objetivo del ejercicio
*/

// let numArray = [];

// for (let num = 10; num >= 1; num--){
//     numArray.push(num);
// }

// console.log(numArray);

////////////////////////////////////////////////////////////////////////

/** Ejercicio 11
 * 
 * Crea un bucle que sume los numeros del 1 al 100
 * r esultado final 5050
 */

// function sumaNum(){
//     let suma = 0
//     let i = 1
//     do{
//         suma += i;
//         i++;
//     } while (i <= 100)
//         console.log(suma); 
        
// }

// sumaNum(100)
