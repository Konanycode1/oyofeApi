import { verifyToken } from "../util/token.js";
import express from "express"
import client from "../models/client.js"

const Auth =  async (req,res,next)=>{
   
    const token = req.headers.authorization.split(" ")[1]
    // const token = req.cookies.token;
    // const userId = req.cookies.userId;
    // const statut = req.cookies.statut
    const verifyted = verifyToken(token);
        try{
            if(verifyted){
                req.auth = {
                    "token" : token,
                    "userId" : verifyted.userId,
                    "statut" : verifyted.statut
                }
                next();
            }
            else{
                throw new Error("token undefine")
            }
        } catch (e) {
            res.status(400).json({message:e.message})
        }
       
};

export default Auth