/**
 * se instalo:
 * npm install mongoose
 * npm install dotenv  --> esto fue para las variables de entorno, como aun no esta conectado no deberia 
 * poner problema si no lo tienen
 */


require('dotenv').config()

// Conexion a base de datos
const mongoose = require('mongoose')


const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@lawatty.rtzdvdd.mongodb.net/${process.env.DBNAME}?retryWrites=true&w=majority`;

mongoose.connect(uri,

    {useNewUrlParser:true, useUnifiedTopology: true}
)
    .then(()=> console.log('conexion exitosa'))
    .catch(e => console.log(e))