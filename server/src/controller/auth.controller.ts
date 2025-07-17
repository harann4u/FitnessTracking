import { Request, Response } from 'express';
import bcrypt from 'bcrypt';
import { User } from '../models/user.model';
import { generateAccessToken, generateRefershToken, verifyRefershToken } from '../services/token.services';

 export const signup = async (req: Request, res: Response): Promise<Response | void> => {
  const { name, email, password } = req.body;

  try {
    const existingUser = await User.findOne({ email });
    if (existingUser)
      return res.status(409).json({ message: 'User already exists' });

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ name, email, password: hashedPassword });
    await user.save();

    return res.status(201).json({ message: 'User created successfully' });
  } catch (err) {
    return res.status(500).json({ message: 'Signup failed', error: err });
  }
};

export const login = async (req:Request, res:Response):Promise<Response | void> => {
  const { email, password } = req.body
  try{
      const user = await User.findOne({ email })
      if(!user) return res.status(401).json({ message: 'user Not Found' })
      
      const isMatch = await bcrypt.compare(password,user.password)
      if(!isMatch) return res.status(401).json({ message: 'Invalid Credentials'})
      
      const accessToken = generateAccessToken({ email })
      const refershToken = generateRefershToken({ email }) 

      res.cookie('refreshToken', refershToken,{
        httpOnly: true,
        secure: true,
        sameSite: 'strict',
        maxAge: 30 * 24 * 60 * 60 * 1000,
      })

      res.json({ accessToken })
  } catch (err) {
      res.status(500).json({ message: 'Login failed', error:err})
  }
}


// once the Access token expires this ervices will be initated Automatically. for getting the New Access Token. 
export const refreshToken = async(req:Request, res:Response):Promise<Response | void> => {
     const token = req.cookies.refreshToken;
    if(!token) return res.sendStatus(401)
    
    const user = verifyRefershToken(token)
    if(!user)  return res.sendStatus(403)

    const accessToken = generateAccessToken({ email: user.email })
    res.json({ accessToken })
}
