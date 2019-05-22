const Model = require('../models/DetailsModel');
const Util = require('../helpers/util');
const Mysql = require('../helpers/mysql');

class Details extends Model {

    constructor(args) {
        super(args);
    }

    async InsertarProductos() {
        try {

            let result =
                await Mysql.executeQuery(`
                    INSERT INTO orders_details 
                    (id_order,id_product)
                    values
                    ('${this.id_pedido}','${this.id_producto}')
            `);
            if (!result.status) {
            
                
                return {
                    status: false,
                    message: `No se ha podido agregar el producto. ${this.id_producto}`
                }
            }
            return {
                status: true,
                message: 'Se ha agregado el producto de forma exitosa.'
            };
        } catch (error) {
            // Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }

}

module.exports = Details;