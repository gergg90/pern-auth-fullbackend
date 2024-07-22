import mongoose from "mongoose";

//! create userSchema mongodb
const userSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      unique: true,
      require: true,
      trim: true,
    },
    username: {
      type: String,
      require: true,
      trim: true,
    },
    password: {
      type: String,
      require: true,
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
