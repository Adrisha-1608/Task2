const UserModel = require('../models/userModel');

const userController = {
  create: async (request, h) => {
    try {
      const user = await UserModel.create(request.payload);
      return h.response(user).code(201);
    } catch (error) {
      return h.response({ error: error.message }).code(500);
    }
  },

  getAll: async (request, h) => {
    try {
      const users = await UserModel.findAll();
      return h.response(users).code(200);
    } catch (error) {
      return h.response({ error: error.message }).code(500);
    }
  },

  getById: async (request, h) => {
    try {
      const user = await UserModel.findById(request.params.id);
      if (!user) {
        return h.response({ error: 'User not found' }).code(404);
      }
      return h.response(user).code(200);
    } catch (error) {
      return h.response({ error: error.message }).code(500);
    }
  },

  update: async (request, h) => {
    try {
      const user = await UserModel.update(request.params.id, request.payload);
      if (!user) {
        return h.response({ error: 'User not found' }).code(404);
      }
      return h.response(user).code(200);
    } catch (error) {
      return h.response({ error: error.message }).code(500);
    }
  },

  delete: async (request, h) => {
    try {
      const deletedCount = await UserModel.delete(request.params.id);
      if (!deletedCount) {
        return h.response({ error: 'User not found' }).code(404);
      }
      return h.response({ message: 'User deleted successfully' }).code(200);
    } catch (error) {
      return h.response({ error: error.message }).code(500);
    }
  }
};

module.exports = userController;