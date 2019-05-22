//declaracion con var.
//var nombre = 'Yair';
//let nombre = 'Juan';
//console.log(nombre);

/////////////////////////////////////////////////////////////////////////////////////////////////////////

// try {
//     let nombre = 'Yair';
//     let edad = 27;
//     let inscrito = true;
//     let c = [];
//     if (1 != 2) {
//         console.log(edad);
//     } else {
//         console.log('No es verdadero!');
//     }
// } catch (error) {
//     console.log(error);
// } finally {
//     console.log('Se ejecutó el código');
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//tipos de variables
// try {
//     let d = true;
//     let c = {};
//    console.log(de);
// } catch (error) {
//     console.log('ocurrio un error');
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// try {
//     const g = 9;
//     g = 8;
//     console.log(g);
// } catch (error) {
//     console.log('Error');
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////


// try {
//     const g = {
//         nombre:'Juan',
//         apellido:'Perez'
//     };
//     delete g.nombre;
//     console.log(g);
// } catch (error) {
//     console.log('error');
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//'use strict';

// function suma(n1,n2) {
//     try {
//         let suma = n1 + n2;
//         console.log('La suma es '+ suma);
//     } catch (error) {
//         console.log('error');
//     }
// }

// suma(3,6);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function suma() {
//     try {
//         console.log(arguments);
//         let suma = arguments['0'] + arguments['1'];
//         console.log(suma);
//     } catch (error) {
//         console.log(error);
//     }
// }
// suma(1,4);

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function suma(...parametros) {
//     try {
//         console.log(parametros);
//     } catch (error) {
//         console.log(error);
//     }
// }

// suma(1,4,7,8,'Hola');

////////////////////////////////////////////////////////////////////////////////////////////////////////////

//METODOS

// push (Agrega de último)
// unshift (Agrega de primero)
// pop (Elimina el último)
// shift (Elimina el primero)
// splice (Elimina un índice)
// Destructuring

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function lista(){
//     try {
//         let arr = [
//             'Yair',
//             23,
//             {
//                 nombre:'Juan',
//                 apellido:'Montes'
//             }
//         ];
//         arr.push(76);
//         arr.unshift(80);
//         arr.pop();
//         arr.shift()
//         arr.splice(0,2)
//         console.log(arr);
//     } catch (error) {
//         console.log(error)
//     }
// }

// lista();

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function lista(){
//     try {
//         let arr = [
//             'Yair',
//             23,
//             {
//                 nombre:'Juan',
//                 apellido:'Montes'
//             }
//         ];
//        let [p0,p1,p2] = arr;
//         console.log(p1);
//     } catch (error) {
//         console.log(error)
//     }
// }

// lista();

////////////////////////////////////////////////////////////////////////////////////////////////////////////

// function lista() {
//     try {
//         let arr = [
//             'Yair',
//             23,
//             {
//                 nombre: 'Juan',
//                 apellido: 'Montes'
//             }
//         ];

//         arr.map((o)=> {
//             if (o != 'Yair') {
//                 console.log(o);
//             }
//         });

//     } catch (error) {
//         console.log(error)
//     }
// }

// lista();

