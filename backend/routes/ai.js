import express from "express";
import {
  getAllDSAQuestions,
  getDSAQuestionById,
  createDSAQuestion,
  updateDSAQuestion,
  deleteDSAQuestion
} from "../controllers/aicontroller.js";
import { ClerkExpressRequireAuth } from "@clerk/clerk-sdk-node";

const router = express.Router();

// 🟢 CREATE - POST
router.post("/dsa", ClerkExpressRequireAuth(), createDSAQuestion);

// 🟡 READ ALL - GET
router.get("/dsa", ClerkExpressRequireAuth(), getAllDSAQuestions);

// 🟣 READ ONE - GET by ID
router.get("/dsa/:id", ClerkExpressRequireAuth(), getDSAQuestionById);

// 🔵 UPDATE - PUT
router.put("/dsa/:id", ClerkExpressRequireAuth(), updateDSAQuestion);

// 🔴 DELETE - DELETE
router.delete("/dsa/:id", ClerkExpressRequireAuth(), deleteDSAQuestion);

export default router;
