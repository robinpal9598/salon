require('dotenv').config();
const MONGO_CONNECTON = process.env.MONGO_CONNECTON||4000;
const mongoose=require('mongoose');
mongoose.connect(MONGO_CONNECTON)