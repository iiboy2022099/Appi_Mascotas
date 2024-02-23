const { Router } = require('express');
const { check } = require('express-validator');
 
const { validarCampos } = require('../middlewares/validar-campos');
const { mascotasPost, } = require('../controllers/mascotas.controller');
const { existeMascotaById } = require('../helpers/db-validators');
 
const router = Router();
 

router.post(
    "/",
    [
        check("nombre", "El nombre es obligatorio").not().isEmpty(),
        check("raza", "La raza es obligatorio").not().isEmpty(),
        check("estadoAdoptado", "El estado adoptado es obligatorio").not().isEmpty(),
        check("edad", "La edad es obligatoria").not().isEmpty(),
        check("sexo", "El sexo es obligatorio").not().isEmpty(),
        validarCampos,
    ], mascotasPost);


 
module.exports = router;