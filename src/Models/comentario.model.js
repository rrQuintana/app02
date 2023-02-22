const { Schema, model } = require('mongoose');

const comentarioSchema = new Schema({
    contenido: String,
    publicacion: { type: Schema.Types.ObjectId, ref: 'Publicacion' },
    autor: { type: Schema.Types.ObjectId, ref: 'usuarios' }
},
{
    timestamps: true
});

module.exports = model('Comentario', comentarioSchema);