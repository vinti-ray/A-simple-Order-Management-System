const mongoose  = require("mongoose");

const orderSchema = new mongoose.Schema({
    title : {
        type:String,
        require:true,
        trim:true
    },

    cartId:{
        type : String,
        require:true,
        trim:true
    },
    price:{
        type:Number,
        require:true
    },
    discount:{
        type:Number,
        default:0
    }
},{timestamps:true})

module.exports = mongoose.model("orderCollection",orderSchema)