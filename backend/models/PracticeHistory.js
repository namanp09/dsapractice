// backend/models/PracticeHistory.js
import mongoose from "mongoose";

const PracticeSchema = new mongoose.Schema({
  userId: { type: String, required: true }, // Clerk user id
  topic: { type: String, required: true },
  company: { type: String, required: true },
  questions: { type: Array, default: [] }, // store array of Q objects
  createdAt: { type: Date, default: Date.now }
});

export default mongoose.model("PracticeHistory", PracticeSchema);
