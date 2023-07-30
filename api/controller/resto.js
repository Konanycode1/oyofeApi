import { MongooseError } from "mongoose";
import resto from "../models/resto.js";
import { comparePass, hashPass } from "../util/hash.js";
import { generateToken } from "../util/token.js";
import fs from "fs"

class Resto {
    static async create(req,res){
        let {numero,password,image, ...body}=req.body
        
        try {
            const respo = await resto.findOne({numero:numero})
            if(respo){
                return res.status(400).json({message: "Numéro déjà utilisé"})
            }
            resto.create({numero,image:`${req.protocol}://${req.get('host')}/api/images/${req.file.filename}`,password: await hashPass(password),...body})
            res.status(201).json({status:true,message: "Vous avez ajouter votre restaurant"})
        } catch (e) {
            if( e instanceof MongooseError){
                return res.status(400).json({status: false, message: e.message})
            }
            res.status(500).json({error: e.message})
        }

    }
    static async loginUser(req,res){
        try {
            let {numero, password} = req.body
            const user = await resto.findOne({numero})
            if(user && comparePass(password, user.password)){
                // console.log("ok")
                // res.cookie('token', generateToken(user.toObject()))
                // res.cookie('userId', user._id);
                // res.cookie('statut',"Resto")
                return res.status(200)
                .json({
                    status: true,
                    userId:user._id,
                    message:"Connexion encours",
                    statut: "Resto",
                    token: generateToken({userId:user._id,statut:"resto"})
                })
            }
            return res.status(401).json({
                status:false,
                message: "Identifiant introuvable"
            })
            
        } catch (e) {
            if(e instanceof MongooseError){
                return res.status(400).json({message: e.message})
            }
            return res.status(500).json({message: e.message})
        }
    }
    static async readById(req,res){
       
        try {
            const userId = req.auth.userId
            const data = await resto.findById(userId)
            if(data){
                res.status(200).json({status:true,message:data})
            }
            else{
                res.status(401).json({
                    status:false,
                    message: "Identifiant introuvable"
                })
            }
            
        } catch (e) {
            if(e instanceof MongooseError){
                res.status(400).json({message: e.message})
            }
            res.status(500).json({message: e.message})
        }
    }
    static async deleteResto(req,res){
       try {
        const {idResto} = req.params;
        const restoId = req.auth.userId;
        const restoUser = await resto.findById(idResto)
        if(restoUser && restoUser._id == restoId){
            const filename = restoUser.image.split('/api/images/')[1]
            fs.unlink(`images/${filename}`, async ()=>{
               const delet =  await restoUser.deleteOne({_id:idResto})
               if(!delet){
                    res.status(400)
                    .json({
                        status: true,
                        message: "Erreur"
                    });
               }
                res.status(201)
                .json({
                    status: true,
                    message: "Vous avez supprimé ce compte"
                });
            });
        }
        else {
            res.status(401)
            .json({
                status:false,
                message:"Indentifiant introuvable"
            })
        }
       } catch (e) {
        if(e instanceof MongooseError){
            return res.status(400).json({message: e.message})
        }
        return res.status(500).json({message: e.message})
       }
    }
    static async updateResto(req,res){
        try {
            const {idResto }= req.params;
            const restoId = req.auth.userId
            console.log(req.params)
            console.log(req.auth.userId)
            let {password ,image,...body} = req.body
            const restoUser = await resto.findById(idResto)
            if(restoUser && restoUser._id == restoId){
                let updateresto
                if(image){
                    image=`${req.protocol}://${req.get('host')}/api/images/${req.file.name}`
                    updateresto = await restoUser.updateOne({image,...body})
                }
                else if(password){
                    updateresto = await restoUser.updateOne({password:await hashPass(password),...body})
                }
                else if (image && password){
                    image=`${req.protocol}://${req.get('host')}/api/images/${req.file.name}`
                    updateresto = await restoUser.updateOne({image,password:await hashPass(password),...body})
                }
                else{
                    updateresto = await restoUser.updateOne({...body})
                }

                return  res.status(200)
                .json({
                    status: true,
                    message:"succès"
                })
            }
            res.status(401)
                .json({
                    status: false,
                    message:"indentifiant incorrect"
                })
        } catch (e) {
            if(e instanceof MongooseError){
                return res.status(400).json({message: e.message})
            }
            return res.status(500).json({message: e.message})
        }
    }
}

export default Resto