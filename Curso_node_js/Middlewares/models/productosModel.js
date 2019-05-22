class ProductosModel {
    constructor(args) {
        this.id = args.id || null;
        this.descripcion = args.descripcion;
        this.precio = args.precio;
        
    }
    set id(value) {
        this.idValue = value;
    }
    get id() {
        return this.idValue;
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

module.exports = ProductosModel;