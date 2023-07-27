import express from "express";
import diaryService from "../services/diaryService";
const router = express.Router();

router.get("/", (_req, res) => {
  res.json(diaryService.getNonSensitiveEntries());
});

router.get("/:id", (req, res) => {
  const { id } = req.body;
  const diary = diaryService.findById(id);

  if (diary) res.json(diary);
  res.sendStatus(404);
});

router.post("/", (_req, res) => {
  res.send("saving a diary");
});

export default router;
