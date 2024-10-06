import mongoose from "mongoose";

// Base user schema

const userSchema = new mongoose.Schema({
    name:{type : 'string'},
    role:{
        type : 'string',
        enum: ["Admin", "Customer", "DeliveryPartner"],
        required : true,
    },
    isActivated: {type : boolean , default : false},
});

// customer schema
const customerSchema = new mongoose.Schema({
    ...userSchema.obj,
    phone: { type: Number, required: true,unique: true},
    role: { type: String, enum: ["Customer"],default: "Customer"},
    livelocation : {
        longitude :{ type: Number},
        latitude : {type: Number},
    },
    address: { type: String},
});

const DeliveryPartnerSchema = new mongoose.Schema({
    ...userSchema.obj,
    email: { type: String, required: true, unique: true},
    phone: { type: Number, required: true,unique: true},
    role: { type: String, enum: ["DeliveryPartner"],default: "DeliveryPartner"},
    livelocation : {
        longitude :{ type: Number},
        latitude : {type: Number},
    },
    address: { type: String},
    branch: {
        type:mongoose.Schema.Types.ObjectId,
        ref:"Branch",
    },
    // Admin Schema
    

});
const adminSchema = new mongoose.Schema({
    ...userSchema.obj,
    email: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    role: { type: String, enum: ["Admin"],default: "Admin"},
});

export const Customer = mongoose.model("Customer",customerSchema);
export const DeliveryPartner = mongoose.model("DeliveryPartner",DeliveryPartnerSchema);
export const Admin = mongoose.model("Admin",adminSchema);

