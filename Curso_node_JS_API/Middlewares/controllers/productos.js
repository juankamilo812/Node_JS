const Model = require('../models/productosModel');
const Util = require('../helpers/util');
const Mysql = require('../helpers/mysql');

class Productos extends Model {

    constructor(args) {
        super(args);
    }

    static async getAll() {
        try {
            //throw new Error('Error en cliente!!!');
            //let mysql = new Mysql();
            let result = await Mysql.executeQuery('SELECT * FROM products WHERE enabled=1');
            return result;
        } catch (error) {
            //fs.writeFileSync('logs/logError.txt', error);
            Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }

    async add() {
        try {
            let result =
                await Mysql.executeQuery(`
                    INSERT INTO products 
                    (description,price)
                    values
                    ('${this.descripcion}','${this.precio}')
            `);
            if (!result.status) {
                return {
                    status: false,
                    message: 'No se ha podido agregar el producto.'
                }
            }
            return {
                status: true,
                message: 'Se ha agrgado el producto de forma exitosa.'
            };
        } catch (error) {
            Util.writeLogError(error);
            return {
                status: false,
                message: error
            };
        }
    }


    static async delete(id) {
        try {
            let result = await Mysql.executeQuery(`DELETE FROM products WHERE id=${id}`);
            if (!result.status) {
                return {
                    status: false,
                    message: 'No se ha podido eliminar el producto!'
                };
            } else if (result.objResponse.affectedRows === 0) {
                return {
                    status: false,
                    message: 'No se ha podido eliminar el producto!'
                };
            }
            return {
                status: true,
                message: 'El producto se eliminó de forma exitosa.'
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

module.exports = Productos;