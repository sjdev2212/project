import express from 'express';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import authRoute from './routes/auth.js';
import usersRoute from './routes/users.js';
import hotelsRoute from './routes/hotels.js';
import cookieParser from 'cookie-parser';
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

//middleware    
app.use(cookieParser());
app.use(express.json());
app.use('/api/auth', authRoute);
app.use('/api/users', usersRoute);
app.use('/api/hotels', hotelsRoute);

app.use((err, req, res, next) => {
    const errorStatus = err.status || 500;
    const errorMessage = err.message || "Something went wrong!";
    return res.status(errorStatus).json({
      success: false,
      status: errorStatus,
      message: errorMessage,
      stack: err.stack,
    });
  });


app.listen (port, () => {
    connect()
    console.log(`Serverino is running on port ${port}`);
})