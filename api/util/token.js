import jwt from "jsonwebtoken";

/**
 * 
 * @param {String} playlaod 
 * @returns 
 */
export const generateToken = (playlaod)=>{
    const JWT_SECRET = process.env.JWT_SECRET
    if(!JWT_SECRET) throw new Error("Code secret JWT introuvable");
    const token =  jwt.sign(playlaod, JWT_SECRET, {expiresIn: 3600*24});
    return token
}

/**
 * @param {String} token
 */
export const verifyToken = (token)=>{
    try{
        return jwt.verify(token, process.env.JWT_SECRET);
    }
    catch(e){ 
        console.log(e)
    }
}