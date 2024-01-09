import Usuario from '../models/Usuario.js';
import generarId from '../helpers/generarId.js';
import generarJWT from '../helpers/generarJWT.js';

const registrar = async (req, res) => {
    //Evitar registros duplicados (Front)
    const { email } = req.body;
    const existeUsuario = await Usuario.findOne( { email } ) //puedo hacerlo ({email : email})

    if(existeUsuario) {
        const error = new Error('Usuario ya registrado.');
        return res.status(400).json({ msg: error.message });
    }

    try {

        const usuario = new Usuario(req.body);  
        usuario.token = generarId();
        const usuarioAlmacenado = await usuario.save();
        res.status(200).json({
            msg: 'Usuario creado correctamente.',
            data: usuarioAlmacenado
        })
        
    } catch (error) {

        console.log(error);
        
        res.status(400).json({
            msg: 'No fue posible crear el usuario, por favor verifique los datos'
        })
    }
};

const autenticar = async (req, res) => {
    const { email, password } = req.body;
    //Comprobar que existe
    const usuario = await Usuario.findOne({email});
    if(!usuario){
        const error = new Error('Usuario no existe.');
        return res.status(404).json({ msg: error.message });
    }

    //Comprobar si esta confirmado
    if(!usuario.confirmado){
        const error = new Error('Tu cuenta no ha sido confirmada.');
        return res.status(403).json({ msg: error.message });
    }

    //Comprobar password
    if(await usuario.comprobarPassword(password)){
        res.json({
            _id: usuario._id,
            nombre: usuario.nombre,
            email: usuario.email,
            token: generarJWT(usuario._id)
        })
    }else {
        const error = new Error('El password es incorrecto.');
        return res.status(403).json({ msg: error.message });
    }

}

export {
    registrar,
    autenticar
}