const mongoose = require('mongoose');

const nuevoArriendo = new mongoose.Schema({
    titulo:{
        type: String,
        required: true
    },
    descripcion:{
        type: String,
        required: true
    },
    precio:{
        type: String,
        required: true
    },
    ubicacion:{
        type: String,
        required: true
    },
    capacidad:{
        type: String,
        required: true
    },
    imagen:{
        type: String,
        required: true
    },
    fecha:{
        type: Date,
        default: Date.now
    },
    estado:{
        type: String,
        required: true
    },
}, {timestamps: true});

module.exports = mongoose.model('arriendo', nuevoArriendo);