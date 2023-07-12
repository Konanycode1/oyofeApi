import client from "../models/client.js";
import commande from "../models/commande.js";
import post from "../models/post.js";
import { MongooseError } from "mongoose";

class Commande{
    static async createCom(req,res){
        try {
            const  clientId = req.auth.userId;
            const  {postId} = req.params;
            const {nombre,...body} = req.body
            const clientUser = await client.findById(clientId);
            if(!clientUser){
                res.status(401).json({status:false,message:"Vous n'est pas autorisé !!"})
                return
            }
            const postAvailable = await post.findById(postId);
            if(!postAvailable){
                res.status(401).json({status:false,message:"Post introuvable !!"})
                return
            }
            const commandeSend = await commande.create({
                nombre,
                ...body,
                author:clientUser._id,
                post: postAvailable._id
            })
            if(commandeSend){
                await clientUser.updateOne({$push:{commande: {$each:[`${commandeSend._id}`]}}})
                await postAvailable.updateOne({$push:{commande: {$each:[`${commandeSend._id}`]}}})
            }
            res.status(200).json({status:true, message:"Commande en cours"})
        } catch (e) {
            if(e instanceof MongooseError){
                return res.status(400).json({message:e})
            }
            return res.status(500).json({message:e.message})
        }
    }
}
export default Commande