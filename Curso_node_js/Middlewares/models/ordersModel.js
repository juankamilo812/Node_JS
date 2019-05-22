class OrdersModel {
    constructor(args) {
        this.id = args.id || null;
        this.descripcion = args.descripcion;
        this.id_cliente = args.id_cliente;
        this.precio = args.precio;
        
    }
    set id(value) {
        this.idValue = value;
    }
    get id() {
        return this.idValue;
    }

    set id_cliente(value) {
        this.id_clienteValue = value;
    }
    get id_cliente() {
        return this.id_clienteValue;
    }

    set descripcion(value) {
        this.descripcionValue = value;
    }
    get descripcion() {
        return this.descripcionValue;
    }
    set precio(value) {
        this.precioValue = value;
    }
    get precio() {
        return this.precioValue;
    }

}

module.exports = OrdersModel;