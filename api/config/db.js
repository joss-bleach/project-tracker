import mongoose from "mongoose";

const connectDatabase = async () => {
  try {
    const createConnection = await mongoose.connect(process.env.MONGO_URI);
    console.log(
      `MongoDB connection established: ${createConnection.connection.host}`
        .yellow.bold
    );
  } catch (err) {
    console.error(`Error: ${err.message}`.trimEnd.bold);
    process.exit(1);
  }
};

export default connectDatabase;
