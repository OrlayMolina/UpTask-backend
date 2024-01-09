import express from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";
import usuarioRoutes from './routes/usuarioRoutes.js'; //Carpeta actual ./

const app = express();
app.use(express.json());
dotenv.config();

conectarDB(); 

//Routing 
// con .use soporta el endpoint de /api/usuario los verbos POST, PUT, PATCH, DELETE
app.use('/api/usuarios', usuarioRoutes);

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
