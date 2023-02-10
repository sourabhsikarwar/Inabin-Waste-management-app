import express from "express";

const router = express.Router();

// Test Route
router.get("/try", (req, res) => {
    res.json("Hello World");
});

export default router;