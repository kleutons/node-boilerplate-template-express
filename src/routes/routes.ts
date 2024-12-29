import { Router } from "express";
import { routesItem } from "./item.routes";

const router = Router();

// Call all routes here
router.use(routesItem); 

export default router;