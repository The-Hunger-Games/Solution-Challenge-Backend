const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const NGOValidation = require('../../validations/ngo.validation');
const NGOController = require('../../controllers/ngo.controller');

const router = express.Router();

router
  .route('/')
  .post(auth('manageNGOs'), validate(NGOValidation.createNgo), NGOController.createNgo)
  .get(auth('getNGOs'), validate(NGOValidation.getNgos), NGOController.getNgos);

router
  .route('/:userId')
  .get(auth('getNGO'), validate(NGOValidation.getNgo), NGOController.getNgo)
  .patch(auth('manageNGOs'), validate(NGOValidation.updateNgo), NGOController.updateNgo)
  .delete(auth('manageNGOs'), validate(NGOValidation.deleteNgo), NGOController.deleteNgo);

module.exports = router;
