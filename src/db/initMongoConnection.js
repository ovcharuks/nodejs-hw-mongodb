import 'dotenv/config';
import mongoose from 'mongoose';

const DB_URI = process.env.DB_URI;
//   'mongodb+srv://ovcharuksvg:zRfqT9NSi13tWOM1@cluster0.bnnti.mongodb.net/contacts?appName=Cluster0';
export const initMongoConnection = async () => {
  await mongoose.connect(DB_URI);
};

// zRfqT9NSi13tWOM1;
