import express from "express";
import Post from "../controller/post.js";
import multerImage from "../middleware/multer.js";
import Auth from "../middleware/auth.js";
const RoutePost = express.Router();

RoutePost.post('/poste/',Auth,multerImage.single('image'),Post.createPost);
RoutePost.get('/post/:idPost',Auth,Post.getPost)
RoutePost.put('/post/:idPost',Auth,multerImage.single('image'),Post.updatePost)
RoutePost.delete('/post/:postId',Auth,Post.deletePost)
RoutePost.get("/postAll/", Auth, Post.readAll);
RoutePost.get("/readForAll/", Post.readForAll);

export default RoutePost