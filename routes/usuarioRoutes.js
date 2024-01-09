import express from "express";
const router = express.Router();

import { registrar, autenticar, confirmar, olvidePassword, comprobarToken } from "../controllers/usuarioController.js"; //Archivos propios, especificar .js

// Autenticaión, Registro y Confirmación de Usuarios.
router.post('/', registrar); //Crea un nuevo usuario.
router.post('/login', autenticar);
router.get('/confirmar/:token', confirmar);
router.post('/olvide-password', olvidePassword);
router.get('/olvide-password/:token', comprobarToken);

export default router;