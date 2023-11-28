import User from "../model/user.model.js";
import bcryptjs from 'bcryptjs'
export const signup=  async(req,res)=>{
   const {username,email,password}=req.body
   const hashpassword=bcryptjs.hashSync(password,10)

   const newUser=new User({username,email,password:hashpassword});
  await  newUser.save();

  res.status(201).json('User creted successfully..')

// console.log(req.body)

}