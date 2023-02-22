const { Router } = require('express');
const router = Router();

const { getUser, createUser, getUsuario, getUsuarioPublicaciones, deleteUser, updateUser } = require('../Controllers/usuario.controller');

router.route('/')
  .get(getUser)
  .post(createUser)

router.route('/:id')
  .get(getUsuario)
  .delete(deleteUser)
  .put(updateUser)

  router.route('/publicaciones/:id')
  .get(getUsuarioPublicaciones)

module.exports = router;