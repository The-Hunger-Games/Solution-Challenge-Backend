const httpStatus = require('http-status');
const pick = require('../utils/pick');
const ApiError = require('../utils/ApiError');
const catchAsync = require('../utils/catchAsync');
const { ngoService } = require('../services/ngo.service');

const createNgo = catchAsync(async (req, res) => {
  const user = await ngoService.createNgo(req.body);
  res.status(httpStatus.CREATED).send(user);
});

const getNgos = catchAsync(async (req, res) => {
  const filter = pick(req.query, ['name']);
  const options = pick(req.query, ['sortBy', 'limit', 'page']);
  const result = await ngoService.queryUsers(filter, options);
  res.send(result);
});

const getNgo = catchAsync(async (req, res) => {
  const user = await ngoService.getUserById(req.params.userId);
  if (!user) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User not found');
  }
  res.send(user);
});

const updateNgo = catchAsync(async (req, res) => {
  const user = await ngoService.updateUserById(req.params.userId, req.body);
  res.send(user);
});

const deleteNgo = catchAsync(async (req, res) => {
  await ngoService.deleteUserById(req.params.userId);
  res.status(httpStatus.NO_CONTENT).send();
});

module.exports = {
  createNgo,
  getNgos,
  getNgo,
  updateNgo,
  deleteNgo,
};
