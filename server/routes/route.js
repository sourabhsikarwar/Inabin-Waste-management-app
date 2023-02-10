import express from "express";
import { userLogin , userRegister} from "../controllers/userController.js";

const router = express.Router();

router.post("/userLogin", userLogin);
router.post("/userRegister", userRegister);

// Test Route
router.get("/try", (req, res) => {
    res.json("Hello World");
});

export default router;