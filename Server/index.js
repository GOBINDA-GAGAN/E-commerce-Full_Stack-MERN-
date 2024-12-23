import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import dotenv from "dotenv";
dotenv.config();
import morgan from "morgan";
import helmet from "helmet";

const app = express();
app.use(cors());
app.options("*", cors());
app.use(cookieParser());
app.use(express.json());
// app.use(morgan());
app.use(
  helmet({
    contentSecurityPolicy: false,
  })
);

const PORT = process.env.PORT || 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");

  res.json({
    message: "Hello World",
    status: 200,
  });
});
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
