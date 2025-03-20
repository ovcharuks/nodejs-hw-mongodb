import 'dotenv/config';
import mongoose, { get } from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

const user = getEnvVar('MONGODB_USER');
const password = getEnvVar('MONGODB_PASSWORD');
const url = getEnvVar('MONGODB_URL');
const db = getEnvVar('MONGODB_DB');

//   'mongodb+srv://ovcharuksvg:zRfqT9NSi13tWOM1@cluster0.bnnti.mongodb.net/contacts?appName=Cluster0';
const DB_URI = `mongodb+srv://${user}:${password}@${url}/${db}?appName=Cluster0`;

export const initMongoConnection = async () => {
  await mongoose.connect(DB_URI);
};

// zRfqT9NSi13tWOM1;
