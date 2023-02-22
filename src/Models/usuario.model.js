const { Schema, model } = require('mongoose');

const usuarioSchema = new Schema({
    nombre: String,
    email: String,
    password: String,
},
{
    timestamps: true,
});

module.exports = model('Usuario', usuarioSchema);