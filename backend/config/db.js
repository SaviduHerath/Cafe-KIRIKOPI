import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://saviduherath2003:20030704@cluster0.jfszauc.mongodb.net/cafe-kirikopi"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
  }
};
