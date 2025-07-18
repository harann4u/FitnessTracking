import { Request, Response } from 'express';


export const saveUserDetails = async (req:Request, res:Response) => {
    const userDetails = req.body
    try{
        return res.status(201).json(userDetails)
    }catch (err){
        return res.status(500).json({ message: 'Signup failed', error: err })
    }
}