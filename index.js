const express = require('express');
const dotenv = require('dotenv');


const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

dotenv.config();

app.listen(process.env.PORT,(error)=>{
    if(error){
        console.log("Ha ocurrido un error"); 
    }
    console.log(`Corriendo en puerto ${process.env.PORT}`);
})