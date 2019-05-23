const Model = require('../models/DetailsModel');
const Util = require('../helpers/util');
const Mysql = require('../helpers/mysql');

class Details extends Model {

    constructor(args) {
        super(args);
    }

    async InsertarProductos() {
        try {

            let insert;
            this.id_producto.forEach((e, i) => {
                if (i == 0) {
                    insert = `('${this.id_pedido}','${e}')`
                } else {
                    insert = `
                    ${insert},
                    ('${this.id_pedido}','${e}')`
                }
            });

            let result =
                await Mysql.executeQuery(`
                    INSERT INTO orders_details 
                    (id_order,id_product)
                    values
                    ${insert}
            `);
            if (!result.status) {
                return {
                    status: false,
                    message: 'No se ha podido agregar el pedido con los productos.'
                }
            }
            return {
                status: true,
                message: 'Se ha agregado el pedido con los productos de forma exitosa.'
            };
        } catch (error) {

            return {
                status: false,
                message: error
                //     return result;
                // } catch (error) {
                //     // Util.writeLogError(error);
                //     return {
                //         status: false,
                //         message: error
            };
        }
    }

}

module.exports = Details;