//import { Router } from "express";
//import { createUser } from "../controller/user.controller";

//const router = Router();

//router.post("/users", createUser);

//export default router;
// app.ts
// routes/user.routes.ts
// routes/user.routes.ts
import { Router } from "express";
import { createUser } from "../controller/user.controller";

const router = Router();

router.post("/users", createUser); // ✅ Defines only a POST route

export default router;
