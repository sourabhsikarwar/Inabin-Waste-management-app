import express from "express";
import { userLogin , userRegister} from "../controllers/userController.js";
import { createRequest, getRequests, getRequest, updateRequest } from "../controllers/requestController.js";
import { handleCollection } from "../controllers/collectionController.js";

const router = express.Router();

router.post("/userLogin", userLogin);
router.post("/userRegister", userRegister);
router.post("/user/request", createRequest);
router.get("/user/requests", getRequests);
router.post("/user/getRequest", getRequest);
router.put("/user/updateRequest/:id", updateRequest);
router.post("/collector/pickups", handleCollection);

export default router;