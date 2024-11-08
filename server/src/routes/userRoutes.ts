import { Router } from "express";
import { getUser, getUsers, postUser } from "../controllers/userController";

const router = Router();

router.get("/", getUsers);
router.post("/", postUser);
router.get("/", getUser);

// Adding CORS pre-flight handler
router.options("", (req, res) => {
res.set({
'Access-Control-Allow-Origin': 'https://master.d3rpe2d2b8wltm.amplifyapp.com',
'Access-Control-Allow-Headers': 'Authorization,Content-Type,Accept,Origin',
'Access-Control-Allow-Methods': 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS'
});
res.send();
});

export default router;