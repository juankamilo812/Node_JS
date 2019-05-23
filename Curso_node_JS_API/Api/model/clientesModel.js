
class clientesModel {
    constructor(args) {
        this.nombre = args.nombre;
        this.apellido = args.apellido;
        this.documento = args.documento;
    }

set nombre(value) {
    return this.nombreValue = value;
}
get nombre() {
    return this.nombreValue;
}
set apellido(value) {
    return this.apellidoValue = value;
}

get apellido() {
    return this.apellidoValue;
}

set documento(value) {
    return this.documentoValue = value;
}

get documento() {
    return this.documentoValue;

}
}

module.exports = clientesModel;