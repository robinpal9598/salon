const mongoose = require('mongoose');
const formSchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'users'
    },
    name: {
        type: String,
    },
    email: {
        type: String,
    },
    phone: {
        type: Number,
       
    },
    date:{
        type:Date
    },
    flag:{
        type:Boolean
    },
    services:{
        type:Object
    }
})
const Form=mongoose.mongoose.model("appointment", formSchema);
module.exports = Form;