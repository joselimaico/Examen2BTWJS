/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */


const jwt = require('jsonwebtoken')
module.exports = {
  signup: async (req, res) => {
    let params = req.allParams()
    let created = await Usuario.create({nombre:params.nombre,apellido:params.apellido,correo:params.correo,
      direccion:params.direccion,username: params.username, password: params.password}).fetch()
    let payload = {subject:created.id}
    let token=jwt.sign(payload,'secretKey')
    return res.json({token})

  },
  login:(req,res)=>{
    let userData=req.body
    Usuario.findOne({username:userData.username},(error,user)=>{
      if(error){
        console.log(error)
      }else {
        if(!user){
          res.status(401).send('Invalid username')
        } else
        if(user.password !== userData.password) {
          res.status(401).send('Invalid password')
        }else{
          let payload = {subject:user.id}
          let token = jwt.sign(payload, 'secretKey')
          res.status(200).send({token})
          //return res.status(200).json(user)
        }
      }
    })
  }

};

