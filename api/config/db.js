import { connect } from "mongoose";
import { inProduction } from "./env.js";

export const connectDB = async ()=>{
    const MONGO_URI = process.env.MONGO_URI
    if(!MONGO_URI) throw new Error("Veuillez ajouter un URI de mongo")
    await connect(MONGO_URI, {
        dbName:inProduction?'oyofe':"text_oyofe"
    })
}