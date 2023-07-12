import { Schema, model } from "mongoose"

const postSchema = new Schema({
    plat: {type: String, required: true},
    libelle:{type:String, required:true},
    montant: {type:String, required:true},
    image: {type:String, required:true},
    author:{
        type: Schema.Types.ObjectId,
        ref: "resto"
    },
    commande:{
        type:[
            {
                type:Schema.Types.ObjectId,
                ref:"commande"
            }
        ],
        default: []
    }
},
{
    timesTamps: true
}
)
export default model("post",postSchema);