import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const db = process.env.DATABASE_URI;
        const connection = await mongoose.connect(db);
        const url = `${connection.connection.host}:${connection.connection.port}`;

        console.log(`MongoDB conectado en: ${url}`);

    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}

export default conectarDB;
