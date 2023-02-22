const { Router } = require('express');
const router = Router();

const { getComent, createComent, getComentario, deleteComent, updateComent } = require('../Controllers/comentario.controller');

router.route('/')
  .get(getComent)
  .post(createComent)

router.route('/:id')
  .get(getComentario)
  .delete(deleteComent)
  .put(updateComent)

module.exports = router;