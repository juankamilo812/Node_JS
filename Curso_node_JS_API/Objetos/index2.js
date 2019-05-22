// declarando objetos json

// let obj = {
//     nombre: 'juan',
//     obj2: {
//         edad: 30,
//         obj3: {
//             clase: 'node'
//         }
//     }
// };

// console.log(obj.obj2.obj3.clase);
// console.log(obj);


//////////////////////////////////////////////////////////////////////////////////////////////////

//Destructuracion

// let obj = {
//     nombre: "Juan",
//     apellido: "Garcia",
//     edad: 34
// };

// let { nombre, apellido, edad } = obj;
// console.log (obj.nombre,obj.apellido,obj.edad);
// console.log (obj);
// console.log(obj.apellido);

//////////////////////////////////////////////////////////////////////////////////////////////////////

//Fltros funcion anonima

// let obj = [
//     {nombre:"yair",apellido:"montes",edad:30},
//     {nombre:"juan",apellido:"garcia",edad:30},
//     {nombre:"ricardo",apellido:"perez",edad:30},
//     {nombre:"david",apellido:"perez",edad:30}
// ];

// let result = obj.filter(item => {
//     return (item.apellido =='perez');

// });

// console.log(result);

/////////////////////////////////////////////////////////////////////////////////////////////////////

//llaves que retorna el objeto (Object.keys)

// let obj = { nombre: "Yair", apellido: "Leon", edad: 33, genero: "Masculino" , peso: 72 };
// let llaves = Object.keys(obj);
// for (i in llaves) {
//     console.log(llaves[i], ':', obj[llaves[i]]);
// }
//console.log(i);
//console.log(llaves);

////////////////////////////////////////////////////////////////////////////////////////////////////

//GERGAR Y EDITAR

// let obj = { nombre: "Juan", apellido: "Garcia", edad: 30 };
// obj.edocivil = "casado";
// obj.edad = 31;
// console.log(obj);

////////////////////////////////////////////////////////////////////////////////////////////////77

//QUITAR


// let obj = { nombre: "Juan", apellido: "Garcia", edad: 30 };
// delete obj.edad
// console.log(obj);

///////////////////////////////////////////////////////////////////////////////////////////////

//FILTRAR E INCLUIR FUNCION ANONIMA

// function filtrar(texto) {
//     try {
//         let obj = [
//             { nombre: "Yair", apellido: "Leon", edad: 33 },
//             { nombre: "Yair", apellido: "Perez", edad: 33 },
//             { nombre: "Yair", apellido: "Finol", edad: 33 },
//             { nombre: "Yair", apellido: "Perez", edad: 34 }
//         ];
//         let result = obj.filter(item => {
//             return (item.apellido.includes(texto)
//                 || item.nombre.includes(texto));
//         });
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// filtrar('Y');

////////////////////////////////////////////////////////////////////////////////77

// function filtrar(att, valor) {
//     try {
//         let obj = [
//             { nombre: "Yair", apellido: "Leon", edad: 33 },
//             { nombre: "Juan", apellido: "Perez", edad: 33 },
//             { nombre: "Ricardo", apellido: "Finol", edad: 33 },
//             { nombre: "David", apellido: "Perez", edad: 34 }
//         ];
//         let result = obj.filter(item => {
//             return (item[att].includes(valor));
//         });
//         console.log(result);
//     } catch (error) {
//         console.log(error);
//     }
// }
// filtrar('nombre', 'R');

///////////////////////////////////////////////////////////////////////////

//Filtrar libros por categorías.
// función llamada categorias, que recibe como parámetro un texto.
function categorias(texto) {
    try {
        let libros = [
            { titulo: "La isla del tesoro", autor: "Robert Stevenson" },
            { titulo: "Las aventuras de Tom Sawyer", autor: "Mark Twain" },
            { titulo: "El faro del fin del mundo", autor: "Julio Verne" },
            { titulo: "Los tigres de Mompracem", autor: "Emilio Salgari" }

        ];

        let result = libros.filter(item => {
            return (item.titulo.includes(texto)
                || item.autor.includes(texto));
        });
        console.log(result);
    } catch (error) {
        console.log(error);
    }
}
categorias('Robert Stevenson');
