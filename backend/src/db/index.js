import mongoose from "mongoose";
const mongoUrl = process.env.MONGODB_URL;
const mongoId = process.env.MONGO_ID;
export default async function connectDB() {
  try {
    const connectionInstance = await mongoose.connect(`${mongoUrl}/${mongoId}`);
    console.log(
      "\n Database conected DB HOST :",
      connectionInstance.connection.host
    );
  } catch (error) {
    console.log("Error while connecting to database : \n", error);
  }
}
