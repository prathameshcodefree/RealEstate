import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'
import { errorHandler } from "../utilis/error.js";
export const signup=  async(req,res,next)=>{
   const {username,email,password}=req.body
   const hashpassword=bcryptjs.hashSync(password,10)

   const newUser=new User({username,email,password:hashpassword});
    

  try {
    await  newUser.save();
    res.status(201).json('User creted successfully..')
    
  } catch (error) {
    next(errorHandler(500,'error from function'))
    
  }

  

// console.log(req.body)

}