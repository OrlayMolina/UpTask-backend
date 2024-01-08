import express from "express"; //No necesita extension .js
import dotenv from 'dotenv';
const app = express();
dotenv.config();

app.listen(3000, () => {
    console.log('Servidor corriendo en el puerto 3000');
});