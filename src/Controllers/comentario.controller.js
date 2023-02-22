const comentarioCtrl = {};

const Comentario = require('../Models/comentario.model');

comentarioCtrl.getComent = async (req, res) => {
    const comentarios = await Comentario.find();
    res.json(comentarios);
};

comentarioCtrl.createComent = async (req, res) => {
    const { contenido, publicacion, autor } = req.body;
    const newComent = new Comentario({
        contenido: contenido,
        publicacion: publicacion,
        autor: autor,
    });
    await newComent.save();
    res.json({ message: 'Comentario creado: ', newComent });
};

comentarioCtrl.getComentario = async (req, res) => {
    const comentario = await Comentario.findById(req.params.id);
    res.json(comentario);
};

comentarioCtrl.deleteComent = async (req, res) => {
    await Comentario.findByIdAndDelete(req.params.id);
    res.json({ message: 'Comentario eliminado' });
};

comentarioCtrl.updateComent = async (req, res) => {
    const { contenido, publicacion, autor } = req.body;
    await Comentario.findByIdAndUpdate(req.params.id, {
        contenido,
        publicacion,
        autor
    });
    res.json({ message: 'Comentario actualizado' });
};

module.exports = comentarioCtrl;