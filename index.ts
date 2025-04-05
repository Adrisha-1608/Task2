//import {Router} from 'express';
//import userRoutes from './user.routes';
//const router = Router();
//router.use('/users', userRoutes);
//export default router;
import app from "./src/app";

const PORT = 5000;

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});


