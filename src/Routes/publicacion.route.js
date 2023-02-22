const { Router } = require('express');
const router = Router();

const { getPost, createPost, getPublicacion, getComentariosPublicacion, deletePost, updatePost } = require('../Controllers/publicacion.controller');

router.route('/')
  .get(getPost)
  .post(createPost)

router.route('/:id')
  .get(getPublicacion)
  .delete(deletePost)
  .put(updatePost)

  router.route('/comentarios/:id')
  .get(getComentariosPublicacion)

module.exports = router;