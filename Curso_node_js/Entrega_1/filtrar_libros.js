//Filtrar libros por categorías.
// By Juan Camilo Garcia Hurtado

const fs = require('fs');
let texto = process.argv[2];

function categorias() {

    try {
       
        if (!isNaN (texto)) {
            console.log('por favor ingresar solo letras');
            return;
        }

        let libros = [
            { titulo: "La isla del tesoro", autor: "Robert Stevenson" },
            { titulo: "Las aventuras de Tom Sawyer", autor: "Mark Twain" },
            { titulo: "El faro del fin del mundo", autor: "Julio Verne" },
            { titulo: "Los tigres de Mompracem", autor: "Emilio Salgari" }

        ];

        let result = libros.filter(item => {
            return (item.titulo.toLowerCase().includes(texto.toLowerCase()) ||
            item.autor.toLowerCase().includes(texto.toLowerCase()))
        });
        console.log(result);
        fs.appendFileSync ('./logs/log.txt',JSON.stringify(result) + '\n');

    } catch (error) {
        console.log(error);
    }
}

categorias(texto);

