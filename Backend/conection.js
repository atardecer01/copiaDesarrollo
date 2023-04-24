
// Conexion a base de datos
const mongoose = require('mongoose')

const user = 'pruebas';
const password = 'VdU2wvNoD11A5Jlm';
const dbname = 'lawattyBD'
const uri = `mongodb+srv://${user}:${password}@lawatty.rtzdvdd.mongodb.net/${dbname}?retryWrites=true&w=majority`;

mongoose.connect(uri,

    {useNewUrlParser:true, useUnifiedTopology: true}
)
    .then(()=> console.log('conexion exitosa'))
    .catch(e => console.log(e))