import express from 'express';
import Commande from '../controller/commande.js';
import Auth from '../middleware/auth.js';
let RouteCommande = express.Router();

RouteCommande.post('/commande/:postId',Auth,Commande.createCom);

export default RouteCommande