const Model = require('../models/ordersModel');
const Util = require('../helpers/util');
const Mysql = require('../helpers/mysql');

class Orders extends Model {

    constructor(args) {
        super(args);
    }

    static async ConsultarPedido(id) {
        try {
            let result = await Mysql.executeQuery(`SELECT * FROM orders WHERE id=${id}`);
            return result;
        } catch (error) {
            //fs.writeFileSync('logs/logError.txt', error);
            // Util.writeLogError(error);
            return {
                status: false,
                message: error.message
            };
        }
    }

    static async ConsultarCliente(id_cliente) {
        try {
            let result = await Mysql.executeQuery(`SELECT * FROM orders WHERE id_customer=${id_cliente}`);
            return result;
        } catch (error) {
            //fs.writeFileSync('logs/logError.txt', error);
            // Util.writeLogError(error);
            return {
                status: false,
                message: error.message
            };
        }
    }

    async InsertarPedido() {
        try {
            let result =
                await Mysql.executeQuery(`
                    INSERT INTO orders 
                    (description,id_customer,price)
                    values
                    ('${this.descripcion}','${this.id_cliente}','${this.precio}')
            `);
            if (!result.status) {
                return {
                    status: false,
                    message: 'No se ha podido agregar el pedido.'
                }
            }
            return {
                status: true,
                message: 'Se ha agregado el pedido de forma exitosa.'
            };
        } catch (error) {
            Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }

}

module.exports = Orders;