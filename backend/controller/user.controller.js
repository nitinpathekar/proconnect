
import Profile from "../model/profile.model.js"
import User from "../model/users.model.js"
import bcrypt from 'bcrypt'

 export const register= async(req,res)=>{
    try{
        const{name,email,usename}=req.body;
        if(!name||!email ||!usename) return res.status(400).json({message:"All field is required"})
            const user=await User.findOne({
        email
            })


            if(user) return res.status(400).json({User: "User already exist"})

                const hashedpassword=await bcrypt.hashed(password,10)


                const newUser = new User({
                    name,email,password:hashedpassword,
                    username
                })
                await newUser.save()

                const profile =new Profile({UserId:newUser._id})
                return res.json({message: "User registered Successfully"})
    }catch(err){
        return register.status(500).json({message:error.message})

    }
}