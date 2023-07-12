import { Schema, model } from "mongoose";
const clientSchema = new Schema({
    nomClient: {type:String,required:true},
    email:{type: String,required:true},
    numero:{type:String,required:true},
    localisation:{type:String,required:true},
    ville:{type:String,required:true},
    image:{type:String,required:true},
    password:{type:String, required:true},
    commande: {
        type:[
           {
                type:Schema.Types.ObjectId,
                ref:'commande'
            }
        ],
        default:[]
    }
},
{
    timesTamps: true
}
)

export default model("client",clientSchema)