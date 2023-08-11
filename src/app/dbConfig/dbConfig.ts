import mongoose, { mongo } from "mongoose";

export default async function connect() {
    try {
        mongoose.connect(process.env.MONGO_URI!);
        const connection = mongoose.connection;

        connection.on('connected', () => {
            console.log('MongoDB Connected Succesfully');
        })

        connection.on('error', (err) => {
            console.log('MongoDB connection error', err);
            process.exit();
        })

    } catch(err) {
        console.log('Error', err);
    }
}