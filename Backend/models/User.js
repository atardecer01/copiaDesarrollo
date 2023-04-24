

const mongoose = require('mongoose');
const Schema = mogoose.Schema;

const userSchema = new Schema({
    nombre: String,
    correo: String,
    contraseña: String
})


//crear modelo
const User = mongoose.model('user', userSchema);

module.exports = User;


/**!SECTION
 * 
 * hacer el llamado a la base de datos la coleccion usuarios
 * 
 * const User = require('../models/User)
 * 
 * router.get('/', async(req,res)=>{
 * try{
 *  const arrayUSer = await User.find()
 *  console.log(arrayUser)
 * 
 *  res.render("users", {
 * arrayUsers: arrayUser})
 * } catch(error){
 * console.log(error)
 * }
 * } )
 * 
 * 
 */