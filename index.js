import express from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";

const app = express();
dotenv.config();

conectarDB(); 

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});
