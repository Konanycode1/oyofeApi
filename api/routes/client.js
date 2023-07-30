import Client from "../controller/client.js";
import express from "express";
import Auth from "../middleware/auth.js";
const Route = express.Router();
import multerImage from "../middleware/multer.js";



Route.post('/client/',multerImage.single("image"), Client.create);
Route.post('/clientLogin/',Client.loginUser)
Route.put('/client/:idClient',Auth,multerImage.single('image'),Client.updateClient)
Route.delete('/client/:idClient',Auth,Client.deleteClient)
Route.get("/client/",Auth,Client.readById)
export default Route