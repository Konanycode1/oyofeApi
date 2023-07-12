import { MongooseError } from "mongoose";
import client from "../models/client.js";
import { comparePass, hashPass } from "../util/hash.js";
import { generateToken } from "../util/token.js";
import fs from "fs"

class Client{
    static async create(req,res){
        let {numero,email,password,image, ...body}=req.body
        
        try {
            const clt = await client.findOne({email, numero})
            if(clt){
                return res.status(400).json({message: "Compte existe déjà utilisé"})
            }
            client.create({email,image:`${req.protocol}://${req.get('host')}/images/${req.file.filename}`,numero,password: await hashPass(password),...body})
            res.status(201).json({message: "Compte créer !!"})
        } catch (e) {
            if( e instanceof MongooseError){
                return res.status(400).json({status: false, message: e.message})
            }
            res.status(500).json({error: e.message})
        }

    }
    static async loginUser(req,res){
        try {
            const {email, password} = req.body
            const user = await client.findOne({email})
            if(user && comparePass(password, user.password)){
                res.cookie('token', generateToken(user.toObject()))
                res.cookie('userId', user._id)
                res.cookie('statut',"Client")
                return res.status(200)
                .json({
                    status:true,
                    message:"Connexion encours"
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
            const {id} = req.params
            const data = await client.findById(id)
            if(data && data._id == userId){
                res.status(200).json({status:true,message:data})
            }
            res.status(401).json({
                status:false,
                message: "Identifiant introuvable"
            })
            
        } catch (e) {
            if(e instanceof MongooseError){
                res.status(400).json({message: e.message})
            }
            res.status(500).json({message: e.message})
        }
    }
    static async deleteClient(req,res){
       try {
        const {idClient} = req.params;
        const clientId = req.auth.userId;
        console.log(idClient, clientId)
        const clientUser = await client.findById(idClient)
        if(clientUser && clientUser._id == clientId){
            const filename = clientUser.image.split('/images/')[1]
            fs.unlink(`images/${filename}`, async ()=>{
               const delet =  await clientUser.deleteOne({_id:idClient})
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
    static async updateClient(req,res){
        try {
            const {idClient} = req.params;
            const clientId = req.auth.userId;
            let {password ,image,...body} = req.body
            const ClientUser = await client.findById(idClient)
            if(ClientUser && ClientUser._id == clientId){
                let updateClient
                if(image){
                    image=`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                    updateClient = await ClientUser.updateOne({image,...body})
                }
                else if(password){
                    updateClient = await ClientUser.updateOne({password:await hashPass(password),...body})
                }
                else if (image && password){
                    image=`${req.protocol}://${req.get('host')}/images/${req.file.filename}`
                    updateClient = await ClientUser.updateOne({image,password:await hashPass(password),...body})
                }
                else{
                    updateClient = await ClientUser.updateOne({...body})
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
export default Client