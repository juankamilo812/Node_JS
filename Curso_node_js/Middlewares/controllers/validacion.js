class Validacion {
    
    constructor() {
    }

    set usuario(value) {
        this.usuarioValue = value;
    }
    get usuario() {
        return this.usuarioValue;
    }
    set password(value) {
        this.passwordValue = value;
    }
    get password() {
        return this.passwordValue;
    }

    static login(req, res, next) {
        try {
            if (req.fields.usuario === 'juan.garciah'
                && req.fields.password === 'Arus2019') {
                next();
            } else {
                res.send({
                    status: false,
                    message: 'Error en credenciales.'
                });
            }
        } catch (error) {
            console.log(error);
        }
    }
}

module.exports = Validacion;