

const express = require('express');
const formidable = require('express-formidable');
const app = express();

app.use(formidable());



//(Envio de parametros) http://localhost:3000/?nombre=Juan%20Camilo&apellido=Garcia%20Hurtado

// app.get('/', (req, res) => {
//     res.send({
//         status: true,
//         nombre: 'Juan Camilo' + req.query.nombre + ' - ' + req.query.apellido
//     });
//     res.send({
//         status: true,
//         nombre: req.params.nombre,
//         apellido: req.params.apellido
//     });
// });

//La aplicación inicia un servidor y escucha las conexiones en el puerto 3000. 
//La aplicación responde con “Hello World!” para las solicitudes al URL raíz (/) 
//o a la ruta raíz. Para cada vía de acceso diferente, responderá con un error 404 Not Found.

// app.get('/', function (req, res) {
//     res.send('Hello World!');
//   });

// //(Esperando parametros) http://localhost:3000/juan/perez


app.post('/edad', (req, res) => {
    res.send({
        nombre: req.params.apellido
       
    });
});



app.listen(3000, () => {
    console.log('Server running on port 3000...');
});