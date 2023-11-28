import dotenv from "dotenv"
import express from "express";
import  userRoute from './routes/user.router.js';
import userAuth from './routes/auth.router.js'

import mongoose from "mongoose";


dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO ;
// console.log('MongoDB URI:', process.env.MONGO_URL);
mongoose.connect(MONGODB_URI).then(() => {
    console.log('Connected to MongoDB');
    // Continue with your application logic
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const app=express();
app.use(express.json());
app.listen(PORT,()=>{
    console.log("SERVER started at port 3000")
})


app.use('/api/user',userRoute)
app.use('/api/auth',userAuth)