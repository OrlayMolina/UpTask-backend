import express from "express";
import dotenv from 'dotenv';
import conectarDB from "./config/db.js";

const app = express();
dotenv.config();

conectarDB(); 

const port = process.env.PORT || 4000;

app.listen(port, () => {
    console.log(`Servidor correindo en el puerto: ${port}`);
});
