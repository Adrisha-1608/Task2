/*import express from 'express';
import dotenv from 'dotenv';
import { connectDB } from './config/db';
import routes from './routes/user.routes';

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.json());
app.use('/api/users', routes);

// Connect to DB and then start server
connectDB().then(() => {
  app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
  });
});
export default app;*/
// app.ts
import express from "express";
import userRoutes from "./routes/user.routes"; // ✅ importing the router

const app = express();

app.use(express.json());
app.use("/api", userRoutes); // ✅ using the Router

export default app;

