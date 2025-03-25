const userController = require('../controllers/userController');
const { validateUserInput } = require('../middleware/validate');

const routes = [
  {
    method: 'POST',
    path: '/users',
    handler: userController.create,
    options: {
      pre: [{ method: validateUserInput }]
    }
  },
  {
    method: 'GET',
    path: '/users',
    handler: userController.getAll
  },
  {
    method: 'GET',
    path: '/users/{id}',
    handler: userController.getById
  },
  {
    method: 'PUT',
    path: '/users/{id}',
    handler: userController.update,
    options: {
      pre: [{ method: validateUserInput }]
    }
  },
  {
    method: 'DELETE',
    path: '/users/{id}',
    handler: userController.delete
  }
];

module.exports = routes;