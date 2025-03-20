import 'dotenv/config';
import mongoose from 'mongoose';

const MONGODB_USER = process.env.MONGODB_USER;
const MONGODB_PASSWORD = process.env.MONGODB_PASSWORD;
const MONGODB_URL = process.env.MONGODB_URL;
const MONGODB_DB = process.env.MONGODB_DB;

//   'mongodb+srv://ovcharuksvg:zRfqT9NSi13tWOM1@cluster0.bnnti.mongodb.net/contacts?appName=Cluster0';
const DB_URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@${MONGODB_URL}/${MONGODB_DB}?appName=Cluster0`;

export const initMongoConnection = async () => {
  await mongoose.connect(DB_URI);
};

// zRfqT9NSi13tWOM1;
