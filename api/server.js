import express from "express";
import cors from "cors"
import { config } from "dotenv";
import path from "path"
import cookieParser from "cookie-parser";
import { fileURLToPath } from "url";
import { inProduction, urlApi } from "./config/env.js";
import {connectDB} from "./config/db.js";
import Resto from "./routes/resto.js";
import Client from "./routes/client.js";
import RoutePost from "./routes/post.js";
import Routecommande from "./routes/commande.js"


let __dirname = path.dirname(fileURLToPath(import.meta.url))

config({
    path:path.join(process.cwd(), '.env.local'),
})
const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cookieParser())
app.use(express.static("images"))
app.use(express.static('public'));
app.use(express.static(path.join(__dirname, '../dist')));
app.use("/api",Resto);
app.use("/api/",Client);
app.use("/api/",RoutePost)
app.use("/api/",Routecommande)

if (inProduction) {
    app.get('/*', (_, res) => {
      res.sendFile(path.join(__dirname, '../dist/index.html'));
    });
  }

connectDB()
.then(()=>{
    app.listen(3000,()=>{
        console.log("server lancé !!!")
    })
})
.catch((e)=>{
    console.log("Erreur de connexion", e.message)
})