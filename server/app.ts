import express, { json } from "express";

export const app = express();
app.use(json());
app.disable("x-powered-by");

app.get("/", (req, res) => {
  res.json({ message: "Hello World" });
});
