import express from "express";
import { userLogin , userRegister} from "../controllers/userController.js";
import { createRequest, getRequests, getRequest} from "../controllers/requestController.js";

const router = express.Router();

router.post("/userLogin", userLogin);
router.post("/userRegister", userRegister);
router.post("/user/request", createRequest);
router.get("/user/requests", getRequests);
router.get("/user/request/:id", getRequest);

export default router;