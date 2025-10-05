// backend/routes/ai.js
import express from "express";
import { getDSAQuestions } from "../controllers/aicontroller.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = express.Router();

// protected route — user must be signed-in. Clerk middleware adds req.auth
router.post("/dsa", ClerkExpressRequireAuth(), getDSAQuestions);

export default router;