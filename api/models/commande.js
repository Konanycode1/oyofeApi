import { Schema,model } from "mongoose";

const commandeSchema = new Schema({
    nombre :{type: Number,required:true},
    montant :{type:Number,required:true},
    produit:{type:[String], required:true},
    author: {type: Schema.Types.ObjectId, ref:'client'},
    post:{type: Schema.Types.ObjectId, ref:'post'},
    statut:{type:Number, default:0}
},
{
    timesTamps: true
})
export default model("commade", commandeSchema)