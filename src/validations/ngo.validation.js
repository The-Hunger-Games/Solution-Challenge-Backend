const Joi = require('joi');
const { password, objectId } = require('./custom.validation');

const createNgo = {
  body: Joi.object().keys({
    email: Joi.string().required().email(),
    password: Joi.string().required().custom(password),
    name: Joi.string().required(),
    phone: Joi.number().required(),
    latitude: Joi.number(),
    longitude: Joi.number(),
    foodDonated: Joi.number(),
    foodWasted: Joi.number(),
  }),
};

const getNgos = {
  query: Joi.object().keys({
    name: Joi.string(),
    // sortBy: Joi.string(),
    // limit: Joi.number().integer(),
    // page: Joi.number().integer(),
  }),
};

const getNgo = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

const updateNgo = {
  params: Joi.object().keys({
    userId: Joi.required().custom(objectId),
  }),
  body: Joi.object()
    .keys({
      email: Joi.string().email(),
      password: Joi.string().custom(password),
      name: Joi.string().required(),
      phone: Joi.number().required(),
      latitude: Joi.number(),
      longitude: Joi.number(),
      foodDonated: Joi.number(),
      foodWasted: Joi.number(),
    })
    .min(1),
};

const deleteNgo = {
  params: Joi.object().keys({
    userId: Joi.string().custom(objectId),
  }),
};

module.exports = {
  createNgo,
  getNgos,
  getNgo,
  updateNgo,
  deleteNgo,
};
