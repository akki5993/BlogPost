import "dotenv/config";
import express from "express";
import cors from "cors";

const PORT = process.env.PORT || 8080;
const app = express();

app.use(cors());

app.get("/", (req, res) => {
  res.json({ msg: "Welcome" });
});

app.listen(PORT, (req, res) => {
  console.log(`Server is Runnig On localhost:${PORT}`);
});
