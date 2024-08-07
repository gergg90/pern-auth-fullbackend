import { app } from "./app";
import { connectDB } from "./db";

const PORT = process.env.PORT ?? 4000;

//! instance mongodb
connectDB();

app.listen(PORT, () => {
  console.log(`Server on port ${PORT}`);
});
