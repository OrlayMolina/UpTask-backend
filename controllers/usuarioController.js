import Usuario from '../models/Usuario.js';

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

export {
    registrar
}