const express = require('express');
const app = express();
const formidable = require('express-formidable');
const config = require('./config');
const Clientes = require('./controllers/clientes');
const Productos = require('./controllers/productos');
const Orders = require('./controllers/orders');
const Details = require('./controllers/details');
const Validacion = require('./controllers/validacion');


app.use(formidable());

/**
 * Funcionalidades de clientes.
 */
app.post('/clientes/add', async (req, res) => {
    let cliente = new Clientes({
        documento: req.fields.documento,
        nombre: req.fields.nombre,
        apellido: req.fields.apellido
    });
    res.send(await cliente.add());
});
app.post('/clientes/getall', Validacion.login, async (req, res) => {
    res.send(await Clientes.getAll());
});
app.put('/clientes/update', async (req, res) => {
    let cliente = new Clientes({
        id: req.fields.id,
        documento: req.fields.documento,
        nombre: req.fields.nombre,
        apellido: req.fields.apellido
    });
    res.send(await cliente.update());
});
app.delete('/clientes/delete', async (req, res) => {
    res.send(await Clientes.delete(req.fields.id));
});

/**
 * Funcionalidades de productos.
 * 
 */
app.post('/productos/add', async (req, res) => {
    let producto = new Productos({
        descripcion: req.fields.descripcion,
        precio: req.fields.precio

    });
    res.send(await producto.add());
});

app.post('/productos/getall', Validacion.login, async (req, res) => {
    res.send(await Productos.getAll());
});


app.delete('/productos/delete', async (req, res) => {
    res.send(await Productos.delete(req.fields.id));
});

/**
 * Funcionalidades de pedidos.
 * 
 */

app.post('/orders/ConsultarPedido', Validacion.login, async (req, res) => {
    res.send(await Orders.ConsultarPedido(req.fields.id));
});

app.post('/orders/ConsultarCliente', Validacion.login, async (req, res) => {
    res.send(await Orders.ConsultarCliente(req.fields.id_cliente));
});

app.post('/orders/InsertarPedido', async (req, res) => {
    let orders = new Orders({
        descripcion: req.fields.descripcion,
        id_cliente: req.fields.id_cliente,
        precio: req.fields.precio
    });
    res.send(await orders.InsertarPedido());
});

/**
 * Funcionalidades de detalle de pedidos.
 * 
 */

app.post('/details/InsertarProductos', async (req, res) => {
    let details = new Details({
        id_pedido: req.fields.id_pedido,
        id_producto: req.fields.id_producto
    });
    let result = await details.InsertarProductos()
    res.send(result);
});

app.listen(config.port, () => {
    console.log(`Server running on port ${config.port}...`);
});


