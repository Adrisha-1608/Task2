const validateUserInput = (request, h) => {
    const { name, email } = request.payload || {};
    
    if (!name || typeof name !== 'string' || name.length > 100) {
      return h.response({
        error: 'Name is required and must be a string under 100 characters'
      }).code(400).takeover();
    }
  
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return h.response({
        error: 'Valid email is required'
      }).code(400).takeover();
    }
  
    return null;
  };
  
  module.exports = { validateUserInput };