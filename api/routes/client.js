import Client from "../controller/client.js";
import express from "express";
const Route = express.Router();
import multerImage from "../middleware/multer.js";
import Auth from "../middleware/auth.js";


Route.post('/client/',multerImage.single("image"), Client.create);
Route.post('/clientLogin/',Client.loginUser)
Route.put('/client/:idClient',Auth,multerImage.single('image'),Client.updateClient)
Route.delete('/client/:idClient',Auth,Client.deleteClient)
Route.get("/client/:id",Auth,Client.readById)
export default Route