import express from "express";
import {
  createNewMember,
  deleteMemberById,
  fetchAllDirectors,
  fetchAllMembers,
  fetchMemberById,
  updateMember,
} from "../controllers/members.js";

const router = express.Router();

router.get("/members/all", fetchAllMembers);
router.post("/members/add", createNewMember);
router.put("/members/:id", updateMember);
router.get("/members/:id", fetchMemberById);
router.delete("/members/:id", deleteMemberById);
router.get("/directors/all", fetchAllDirectors);


export default router;
