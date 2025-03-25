const Hapi = require('@hapi/hapi');
const UserModel = require('./models/userModel');
const userRoutes = require('./routes/userRoutes');

const init = async () => {
  const server = Hapi.server({
    port: process.env.PORT || 3000,
    host: 'localhost',
    routes: {
      cors: true
    }
  });

  server.route(userRoutes);

  try {
    await UserModel.initialize();
    await server.start();
    console.log('Server running on %s', server.info.uri);
  } catch (error) {
    console.error('Startup failed:', error);
    process.exit(1);
  }
};

process.on('unhandledRejection', (err) => {
  console.error('Unhandled rejection:', err);
  process.exit(1);
});

init();