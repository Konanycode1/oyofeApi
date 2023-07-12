import { model, Schema } from "mongoose";

const restoSchema = new Schema({
    nomResto : {type:String,required:true},
    localisation: {type:String, required:true},
    numero:{type:String, required: true},
    ville:{type:String,required:true},
    libelle:{type:String, required: true},
    heureOuvre:{type:String, required:true},
    heureFerme:{type:String, required:true},
    image:{type:String, requred:true},
    password:{type:String,required:true, minLength:6},
    post: {
        type:[
            {
                type:Schema.Types.ObjectId,
                ref: 'post'
            }
        ],
        default:[]
    }
},
{
    timesTamps: true
}
)

export default model("resto",restoSchema)