import express from "express";
import diariesRouter from "./routes/diaries";
import "dotenv/config";

const app = express();

app.use(express.json());

const PORT = process.env.PORT;

app.get("/ping", (_req, res) => {
  console.log("someone pinged here");
  res.send("pong");
});

app.use("/api/diaries", diariesRouter);

app.listen(PORT, () => {
  console.log(`SERVER LISTENNING ON PORT ${PORT}`);
});
