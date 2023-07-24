const mongoose=require('mongoose');
const blogSchema=new mongoose.Schema({
    title:{
        type:String
    },
    content:{
        type:String
    },
    tag:{
        type:String
    }
})
const Blog=mongoose.mongoose.model("blogs", blogSchema);
module.exports = Blog;