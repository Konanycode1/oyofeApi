import express from "express"
const Route = express.Router();
import Resto from "../controller/resto.js"
import multerImage from "../middleware/multer.js"
import Auth from "../middleware/auth.js";


Route.post('/resto/',multerImage.single('image'),Resto.create),
Route.post('/restoLog/',Resto.loginUser)
Route.put('/resto/:idResto',Auth,multerImage.single('image'),Resto.updateResto)
Route.delete('/resto/:idResto',Auth,Resto.deleteResto)
Route.get("/restoId/",Auth,Resto.readById)

export default Route