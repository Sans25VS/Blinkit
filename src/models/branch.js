import mongoose from "mongoose";
import { DeliveryPartner } from "./user";

// Base user schema

const branchSchema = new mongoose.Schema({
    name:{type : string},
    location:{
        latitude:{type : Number},
        longitude:{type : Number},
    },
    address : {type: string},
    DeliveryPartners:[
        {
            type : mongoose.Schema.Types.ObjectId,
            ref : "DeliveryPartner"
        },
    ],
   
});

const branch = mongoose.model("Branch", branchSchema);

export default branch;
