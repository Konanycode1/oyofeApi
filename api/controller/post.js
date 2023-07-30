import post from "../models/post.js"
import fs from "fs"
import resto from "../models/resto.js"
import { MongooseError } from "mongoose"

class Post{
    static async createPost(req,res){
        try {
            const restoId = req.auth.userId
            const  statut = req.auth.statut;
            let {image,...body} = req.body;
            let restoUser = await resto.findById(restoId)
            if(!restoUser){
                res.status(404).json({status:false,message:"Imposible !!"})
            }
            const newPost = await post.create({
                    image:`${req.protocol}://${req.get('host')}/api/images/${req.file.filename}`,
                    ...body,
                    author:restoId
                })
            const insertPost = await restoUser.updateOne({$push:{post: {$each:[`${newPost._id}`]}}})
                if(insertPost){
                    res.status(201).json({status:true,message:"Post effectué avec succès"})
                }
            
        } catch (e) {
            if(e instanceof MongooseError){
                return res.status(400).json({message:e})
            }
            return res.status(500).json({message:e.message})
        }
    }
    static async getPost(req,res){
        const {idPost} = req.params;
        const restoId = req.auth.userId;
        const user = await resto.findById(restoId);
        if(!user){
            res.status(400).json({message: "Vous n'est pas authorisé!!"})
            return
        }
        const postUser =  await post.findOne({_id:idPost, author:user._id})
        if(!postUser){
            res.status(404).json({message: "Post  introuvables"})
            return
        }
        const fullPost = await postUser.populate('author',
            'nomResto localisation numero ville')
        res.status(200).json({status:true,message:{...fullPost}})
    }

    static async updatePost(req,res){
        try{
            const {idPost} = req.params;
            const  restoId = req.auth.userId;
            let {image,...body} = req.body
            const user = await resto.findById(restoId);
            if(!user){
                res.status(400).json({message: "Vous n'est pas authorisé!!"})
                return
            }
            const postUser =  await post.findOne({_id:idPost, author:user._id})
            if(!postUser){
                res.status(404).json({message: "Post  introuvables"})
                return
            }
            if(image !=null){
                image=`${req.protocol}://${req.get('host')}/api/images/${req.file.filename}`
                await postUser.updateOne({image,...body})
            }
            else{
                await postUser.updateOne({...body})
            }
            res.status(201).json({status:true, message:"succès"})
        }
        catch(e){
            if(e instanceof MongooseError){
                return res.status(400).json({message:e})
            }
            return res.status(500).json({message:e.message})
        }
    }

    static async deletePost(req,res){
        try{
        const  restoId = req.auth.userId;
        const {postId} = req.params
        const user = await resto.findById(restoId)
        if(!user){
            res.status(401).json({status: false , message:"Vous n'est pas autorisé !!"})
            return
        }
        const postAuth = await post.findById(postId)
        if(!postAuth){
            res.status(401).json({status: false , message:"Post introuvable !!"})
            return
        }
        let filename = postAuth.image.split('/api/images/')[1]
        fs.unlink(`images/${filename}`, async ()=>{
            postAuth.deleteOne()
        })
        res.status(401).json({status: true , message:"succès"})
        }
        catch(e){
            if(e instanceof MongooseError){
                return res.status(400).json({message:e})
            }
            return res.status(500).json({message:e.message})
        }
    }
    static async readAll(req,res){
        try {
            const restoId = req.auth.userId
            const restoAuth = await resto.findById(restoId);
            if(restoAuth){
                const data = await post.find({author:restoId});
                res.status(201).json({status: true, message: data})
            }
            else{
                res.status(401).json({status: false, message: "introuvable"})
            }
        } catch (e) {
            res.status(500).json({status: false, message: e.message})
        }
      
    }

    static async readForAll(req,res){
        try {
                const data = await post.find();
                res.status(201).json({status: true, message: data})
           
        } catch (e) {
            res.status(500).json({status: false, message: e.message})
        }
      
    }
}
export default Post