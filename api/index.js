import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
dotenv.config();

const app = express();
const port = 8000;
const connect = async () => { 
try{
   await  mongoose.connect(process.env.MONGORINO);

} catch (error) {
    console.log('MongoDB is not connected');
throw error
}
}
mongoose.connection.on('connected', () => {
    console.log('MongoDB is connected');
})
mongoose.connection.on('disconnected', () => {
    console.log('MongoDB is disconnected');
})

app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/login', authRoute);
app.use('/api/logout', authRoute);


app.listen (port, () => {
    connect()
    console.log(`Serverino is running on port ${port}`);
})