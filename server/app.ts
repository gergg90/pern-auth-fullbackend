import express, { json } from "express";
import morgan from "morgan";
import { authRouter } from "./routes/auth.route";

export const app = express();
app.use(json());
app.disable("x-powered-by");
app.use("/api/auth", authRouter);
app.use(morgan("dev"));

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
