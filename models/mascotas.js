const { Schema, model} = require('mongoose');

const UsuarioSchema = Schema ({
    nombre: {
        type: String,
        required: [true, 'El nombre es obligatorio']
    },
    raza: {
        type: String,
        required: [true, 'La raza es obligatorio']
    },
    estadoAdoptado:{
        type: String,
        required: [true]
    },
    edad: {
        type: String,
        required: [true, 'La edad es obligatorio']
    },
    sexo:{
        type: String,
        required: [true]
    },
    estado:{
        type: Boolean,
        default: true
    }
});

module.exports = model('Mascota', UsuarioSchema);