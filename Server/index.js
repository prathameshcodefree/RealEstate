import dotenv from "dotenv"
import express from "express";

import mongoose from "mongoose";

dotenv.config();
const PORT = process.env.PORT || 3000;
const MONGODB_URI = process.env.MONGO_URL ;
console.log('MongoDB URI:', process.env.MONGO_URL);
mongoose.connect(MONGODB_URI,{
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
    console.log('Connected to MongoDB');
    // Continue with your application logic
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error.message);
  });

const app=express();
app.listen(PORT,()=>{
    console.log("SERVER started at port 3000")
})