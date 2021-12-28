import mongoose from "mongoose";

//const url = "mongodb://127.0.0.1:27017/proyectofinalbackend"
const url = "mongodb+srv://facundomoya18:navidad14@cluster0.1utx0.mongodb.net/proyectofinalbackend"

mongoose.connect(url)

const connection = mongoose.connection

 connection.once("open",()=>{
    console.log("BD conectada")
}) 