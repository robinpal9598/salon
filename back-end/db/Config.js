// require('dotenv').config();
// const MONGO_CONNECTON = process.env.MONGO_CONNECTON;
// const mongoose=require('mongoose');
// console.log(MONGO_CONNECTON)
// mongoose.connect(MONGO_CONNECTON);

require('dotenv').config();
const MONGO_CONNECTION = process.env.MONGO_CONNECTION;
const mongoose = require('mongoose');

console.log(MONGO_CONNECTION);

mongoose.connect(MONGO_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('Connected to MongoDB');
})
.catch((err) => {
  console.error('Error connecting to MongoDB:', err);
});
