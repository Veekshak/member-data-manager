import express from "express";
import memberRoutes from "./routes/memberRoutes.js";
import cors from "cors";
import { config } from "dotenv";

const app = express();

config({
  path: "../config.env",
});

app.use(express.json());
app.use(cors());
app.use(memberRoutes);

app.get("/", (req, res) => {
  res.send("<h1>Website working</h1>");
});

app.listen(process.env.NODE_PORT || 4567, () => {
  console.log(`Server is listening in ${process.env.NODE_PORT}`);
});
