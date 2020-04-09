import { Router } from "express";
import ErrorHandler from "../middleware/errorHandler";
import PostController from "../controllers/PostController";
const router = new Router();

router.get("/post", PostController.posts);

router.use(ErrorHandler);

export default router;