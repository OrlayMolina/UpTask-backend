import mongoose from "mongoose";

const conectarDB = async () => {
    try {
        const connection = await mongoose.connet()
    } catch (error) {
        console.log(`Error: ${error.message}`);
        process.exit(1);
    }
}