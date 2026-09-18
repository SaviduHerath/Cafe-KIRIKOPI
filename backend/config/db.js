import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb://saviduherath2003:20030704@ac-wxuc9wp-shard-00-00.jfszauc.mongodb.net:27017,ac-wxuc9wp-shard-00-01.jfszauc.mongodb.net:27017,ac-wxuc9wp-shard-00-02.jfszauc.mongodb.net:27017/?ssl=true&replicaSet=atlas-srj9zm-shard-0&authSource=admin&appName=Cluster0"
    );
    console.log("DB Connected");
  } catch (error) {
    console.error("DB Connection Failed:", error.message);
  }
};
