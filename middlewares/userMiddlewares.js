const userData = require("../data/usersData");

const createUserMiddleware = (req, res, next) => {
       const {nombre, apellido, dni} = req.body;
    if(!nombre || !apellido || !dni){
      return res.status(400).json({
        ok:false,
        message: "Datos obligatorios"
    })
    }if(typeof nombre != 'string' || typeof apellido != 'string'){
        return res.status(400).json({
            ok:false,
            message: "Nombre/Apellido deben ser string"
        })}
    if(!Number.isInteger(dni)){
        return res.status(400).json({
            ok:false,
            message: "DNI debe ser entero"
        })}
    else{
        let index = userData.findIndex((item) => item.dni == dni);
        if (index != -1) {
            return res.status(400).json({
                ok:false,
                message: "El usuario ya se encuantra registrado"
            })  
            }
            next();
  }
};



module.exports = {createUserMiddleware,};