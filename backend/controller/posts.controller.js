
import Profile from "../model/profile.model.js"
import User from "../model/users.model.js"
import bcrypt from 'bcrypt'

export const activeCheck=async (req,res)=>{

    return res.status(200).json({message: "RUNNING"})

}