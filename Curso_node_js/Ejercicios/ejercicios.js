// //Ejercicio 1 //////////////////////////////////////////////////////////////////////////////

// function factorialvillamil(numero){
//     try {
//         let resultado = 1;
//         for(let i=1; i<=numero;i++){
//             //resultado = resultado + (i * (i+1));       
//             resultado = resultado *i;       
//         }
//         console.log(resultado);            
//     } catch (error) {
//         console.log(error);
//     }
        
// }
// factorialvillamil(4);

// //Ejercicio 2 //////////////////////////////////////////////////////////////////////////////

// function Pares(NumMin, NumMax) {
//     if (isNaN(NumMin) === false && isNaN(NumMax) === false) {
//         let respuesta;
//         let arrPares = [];
//         try {
//             for (let i = NumMin; i <= NumMax; i++) {
//                 respuesta = Math.round(i / 2);
//                 if (i / 2 === respuesta) {
//                     arrPares.push(i);
//                 }
//             }
//             console.log(arrPares);
//         } catch (error) {
//             console.log(error);
//         }
//     }else{
//         console.log("Por favor ingrese Valores Numericos")
//     }
// }
// Pares(0, 10);
// //Pares(0, "10");  //---Prueba con "10"
// //Pares(0, "AB"); //---Prueba con valor no numerico

// //Ejercicio 3 //////////////////////////////////////////////////////////////////////////////

// const vkm = 300000;
// const vml = 186000;
// let Distancia = 15;

// try {
//     let dk = vkm * Distancia;
//     let dm = vml * Distancia;
  
//     if (Distancia >=0) {
//         let respuesta = {
//             'distancia en kilometros': dk,
//             'distancia en millas': dm
//         }
//         console.log(respuesta);
//     } else {
//         console.log('El valor ingresado no es valido');
//     }

// } catch (error) {
//     console.log(error);
// } finally {
//     console.log('El recorrido de la luz fue calculado exitosamente');
// }

// //Ejercicio 4 //////////////////////////////////////////////////////////////////////////////

// function Palindromo(str) {
//     try {
//         var palabra = str.split("");
//         var reverse = palabra.reverse(); 

//         var join = reverse.join("");

//         if (str == join){
//             resultado="es un Palindromo";
//         }else{
//             resultado="no un Palindromo";
//         }

//         console.log(resultado);    
//         }    
//      catch (error) {
//         console.log(error);
//     }
// }
 
// Palindromo("ana");

// //Ejercicio 5 //////////////////////////////////////////////////////////////////////////////

// function Numerosprimos() {
//     try {
//         let InicioRango = 10;
//         const FinRango = 5;
//         let arrprimos = []
//         if (FinRango > InicioRango) {
//             if (InicioRango === 1)
//                 InicioRango = 2
//             for (let x = InicioRango; x <= FinRango; x++) {
//                 if (esPrimo(x))
//                     arrprimos.push(x)
//             }
//             console.log(arrprimos);
//         } else {
//             console.log("El rango de Fin es mayor que el de inicio");
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// esPrimo = (n) => {
//     try {
//         let contador = 2;
//         let primo = true;
//         while ((primo) && (contador != n)) {
//             if (n % contador == 0)
//                 primo = false;
//             contador++;
//         }
//         return primo;
//     } catch (error) {
//         console.log(error);
//     }
// }

// Numerosprimos();

// //Ejercicio 6 //////////////////////////////////////////////////////////////////////////////


// function categorias(texto) {
//     try {
//         let libros = [
//             { titulo: "La isla del tesoro", autor: "Robert Stevenson" },
//             { titulo: "Las aventuras de Tom Sawyer", autor: "Mark Twain" },
//             { titulo: "El faro del fin del mundo", autor: "Julio Verne" },
//             { titulo: "Los tigres de Mompracem", autor: "Emilio Salgari" }

//         ];

//         let result = libros.filter(item => {
//             return (item.titulo.includes(texto)
//                 || item.autor.includes(texto));
//         });
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// categorias('Robert Stevenson');

// //Ejercicio 7 //////////////////////////////////////////////////////////////////////////////

// function conversorLongitudes(lngActual, lngDestino, valor) {
//     let resultado = null;
//     // Validar los valores ingresados
//     if (typeof lngActual != 'string' || typeof lngDestino != 'string' || typeof valor != 'number'
//         || lngActual === '' || lngDestino === '' || valor == null) {
//         // Valida que los tipos de datos sean correctos
//         console.log('Ingresa datos válidos o llena todos los campos solicitados!');
//     } else {
//         try {
//             // Si todos los campos son correctos, valida el tipo de conversión
//             if (lngActual.toLowerCase() === 'centimetros' && lngDestino.toLowerCase() === 'pulgadas') {
//                 // Convertir de centimetros a pulgadas
//                 resultado = valor / 2.54;
//                 return console.log(valor + ' centimetros, equivalen a: ' + resultado + ' pulgadas.');
//             } else if (lngActual.toLowerCase() === 'pulgadas' && lngDestino.toLowerCase() === 'centimetros') {
//                 // Convertir de pulgadas a centimetros
//                 resultado = valor * 2.54;
//                 return console.log(valor + ' pulgadas, equivalen a: ' + resultado + ' centimetros.');
//             } else if (lngActual.toLowerCase() === 'centimetros' && lngDestino.toLowerCase() === 'pies') {
//                 // Convertir de centimetros a pies
//                 resultado = valor * 0.032808;
//                 return console.log(valor + ' centimetros, equivalen a: ' + resultado + ' pies.');
//             } else if (lngActual.toLowerCase() === 'pies' && lngDestino.toLowerCase() === 'centimetros') {
//                 // Convertir de pies a centimetros
//                 resultado = valor / 0.032808;
//                 return console.log(valor + ' pies, equivalen a: ' + resultado + ' centimetros.');
//             } else if (lngActual.toLowerCase() === 'pulgadas' && lngDestino.toLowerCase() === 'pies') {
//                 // Convertir de pulgadas a pies
//                 resultado = valor * 0.083333;
//                 return console.log(valor + ' pulgadas, equivalen a: ' + resultado + ' pies.');
//             } else if (lngActual.toLowerCase() === 'pies' && lngDestino.toLowerCase() === 'pulgadas') {
//                 // Convertir de pies a pulgadas
//                 resultado = valor / 0.083333
//                 return console.log(valor + ' pies, equivalen a: ' + resultado + ' pulgadas.');
//             } else {
//                 return console.log('Ingrese unidades validas para realizar la conversión.');
//             }
//         } catch (error) {
//             console.log('Se presento un error en la operación. Detalles: ' + error);
//         }
//     }
// }

// // Llamada a la función, con los valores especificados
// conversorLongitudes('pies', 'centimetros', 12.7);


// //Ejercicio 8 //////////////////////////////////////////////////////////////////////////////

// function PesoSistemaSolar(Peso){
//     try{
//         if (Peso > 0) {
//             let obj= [
//                 {Jupiter: Math.round(2.55 * Peso)},
//                 {Venus: Math.round(0.87 * Peso)},
//                 {Urano: Math.round(0.99 * Peso)},
//                 {Marte: Math.round(0.38 * Peso)},
//                 {Mercurio: Math.round(0.39 * Peso)},
//                 {Saturni: Math.round(0.93 * Peso)},
//                 {Netptuno: Math.round(1.38 * Peso)},
//                 {Tierra:Math.round(1 * Peso)}
//             ];
//             console.log(obj);           
//         }
//         else{
//             console.log('Debe ser númerico el peso'); 
//         }
//     }catch(error){
//         console.log(error);
//     }
// }
// PesoSistemaSolar(60);

// //Ejercicio 9 //////////////////////////////////////////////////////////////////////////////

// let arreglo = [
//     { indice: 4, marca: 'Chevrolet', modelo: 'Sail' },
//     { indice: 2, marca: 'Renault', modelo: 'Logan' },
//     { indice: 1, marca: 'Nissan', modelo: 'Versa' },
//     { indice: 3, marca: 'Toyota', modelo: 'Corolla' }
// ];

// console.log(`Ejercicio 9: Ordenar arreglo de objetos seg�n su �ndice.
// Este es el arreglo sin ordenar:
// `);

// console.log(arreglo);

// let arregloOrdenado = ordenar(arreglo);

// console.log(`
// Este es el arreglo ordenado por indice:
// `);

// console.log(arregloOrdenado);


// function ordenar(arr) {
// try{
//     let arrOrdenado = [];
//     for(i=0;i <= arr.length; i++) {
//         arr.map(function (o) {

//             let x = o.indice;
//             //console.log(i);
//             //console.log(x);
//             if (x == i) arrOrdenado.push(o);

//         });
       
//     }
//     return arrOrdenado;
// }catch(error){

//     console.log(error);
// }
// }

// //Ejercicio 10 //////////////////////////////////////////////////////////////////////////////

//  // Ordenar arreglo de nombre por longitud de caracteres.	
//     // Realice una función que reciba como parámetro un arreglo de string y 
//     // retorne un arreglo de Json ordenado de menor a mayor según la longitud 
//     // del nombre, y las llaves que debe contener cada json son: "texto" y "longitud".

//     let lista = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

//     // array temporal contiene objetos con posición y valor de ordenamiento
//     let ordenamiento = lista.map(function(el, i) {
//       return { index: i, value: el.toLowerCase() };
//     })
    
//     // ordenando el array mapeado que contiene los valores reducidos
//     ordenamiento.sort(function(lis1, lis2) {
//       if (lis1.value > lis2.value) {
//         return 1;
//       }
//       if (lis1.value < lis2.value) {
//         return -1;
//       }
//       return 0;
//     });
    
//     // contenedor para el orden resultante
//     let resultado = ordenamiento.map(function(el){
//       return lista[el.index];
//     });
    
//     console.log(resultado);



// var text = '';
// var i;
// for (i = 0; i < 2; i++) {
//     console.log('The number is ' + i);
// }


// function bucle() {
//     try {
//         let cars = ['BMW', 'MAZDA', 'FORD', 'RENOLD'];
//         for (i = 0; i < cars.length; i++) {
//             console.log('Los marcas de carros son ' + cars[i]);
//         }
//     } catch (error) {
//         console.log(error);
//     }
// }

// bucle()

var txt = "";
var nombres = ["Juan", "Camilo", "Daniel"];
nombres.forEach(listar_nombres);

function listar_nombres(value, index) {
    txt = txt + index + value +"\n";

}
console.log(txt);