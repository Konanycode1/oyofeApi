import { verifyToken } from "../util/token.js";
import express from "express"

const Auth = (req,res,next)=>{
    const token = req.cookies.token;
    const userId = req.cookies.userId;
    const statut = req.cookies.statut
    const verifyted = verifyToken(token);
    if(verifyted){
        req.auth = {
            "token" : verifyted,
            "userId" : userId,
            "statut" : statut
        }
    }
    else{
        res.redirect("/login")
    }
    next();
};

export default Auth