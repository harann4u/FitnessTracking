import jwt from 'jsonwebtoken'

const ACCESS_SECRET = process.env.ACCESS_SECRET || 'access_secret';
const REFRESH_SECRET = process.env.REFRESH_SECRET || 'refersh_secret'

export const generateAccessToken = (payload:object) => {
    return jwt.sign(payload, ACCESS_SECRET,{expiresIn : '15m'})
}

export const generateRefershToken = (payload : object) => {
    return jwt.sign(payload, REFRESH_SECRET, {expiresIn : '30d'})
}

export const verifyRefershToken = (token: string) => {
    try{
        return jwt.verify(token,REFRESH_SECRET) as any;
    } catch {
        return null
    }
}   


