require('dotenv').config();
const mongoose = require('mongoose');
mongoose.set('strictQuery',false);
const mongoURI = process.env.MONGOURI ;

const connectToMongo = () =>{
    mongoose.connect(mongoURI,()=>{
        console.log("Connected to MongoDB")
    },{useNewUrlParser: true})
}

module.exports = connectToMongo
