class DetailsModel {
    constructor(args) {
        this.id = args.id || null;
        this.id_pedido = args.id_pedido;
        this.id_producto= args.id_producto;
        
    }
    set id(value) {
        this.idValue = value;
    }
    get id() {
        return this.idValue;
    }

    set id_pedido(value) {
        this.id_pedidoValue = value;
    }
    get id_pedido() {
        return this.id_pedidoValue;
    }

    set id_producto(value) {
        this.id_productoValue = value;
    }
    get id_producto() {
        return this.id_productoValue;
    }

}

module.exports = DetailsModel;