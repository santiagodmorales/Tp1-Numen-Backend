const express = require('express');
const dotenv = require('dotenv');
const routes = require('./routes');

dotenv.config();
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api', routes);


//app.get('/fibonacci', (req, res) => {
 //   res.status(200).send("Hola mundo!")
//})



app.listen(process.env.PORT,(error)=>{
    if(error){
        console.log("Ha ocurrido un error"); 
    }
    console.log(`Corriendo en puerto ${process.env.PORT}`);
})