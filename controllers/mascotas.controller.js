const { response, json } = require('express');
const Mascota = require('../models/mascotas');
 
const mascotasPost = async (req, res) =>{
    const { nombre,raza, estadoAdoptado, edad, sexo } = req.body;
    const mascota = new Mascota({ nombre, raza,  estadoAdoptado, edad, sexo });
 
    await mascota.save();
    res.status(200).json({
        mascota
    });
}
 
 
module.exports = {
    mascotasPost
}