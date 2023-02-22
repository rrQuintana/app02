const usuarioCtrl = {};

const Usuario = require("../Models/usuario.model");
const Publicacion = require('../Models/publicacion.model');

usuarioCtrl.getUser = async (req, res) => {
  const usuarios = await Usuario.find();
  res.json(usuarios);
};

usuarioCtrl.createUser = async (req, res) => {
  const { nombre, email, password } = req.body;
  const newUser = new Usuario({
    nombre: nombre,
    email: email,
    password: password,
  });
  await newUser.save();
  res.json({ message: "Usuario creado: ", newUser });
};

usuarioCtrl.getUsuario = async (req, res) => {
  const usuario = await Usuario.findById(req.params.id)
  res.json(usuario);
};

usuarioCtrl.getUsuarioPublicaciones = (req, res) => {
  Publicacion.find({ autor: req.params.id })
    .populate('autor')
    .exec((err, publicaciones) => {
      if (err) {
        return res.status(500).json({ error: err.message });
      }
      res.status(200).json(publicaciones);
    });
};

usuarioCtrl.deleteUser = async (req, res) => {
  await Usuario.findByIdAndDelete(req.params.id);
  res.json({ message: "Usuario eliminado" });
};

usuarioCtrl.updateUser = async (req, res) => {
  const { nombre, email, password } = req.body;
  await Usuario.findByIdAndUpdate(req.params.id, {
    nombre,
    email,
    password,
  });
  res.json({ message: "Usuario actualizado" });
};

module.exports = usuarioCtrl;
