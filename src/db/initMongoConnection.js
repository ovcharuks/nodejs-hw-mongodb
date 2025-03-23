import 'dotenv/config';
import mongoose, { get } from 'mongoose';
import { getEnvVar } from '../utils/getEnvVar.js';

const user = getEnvVar('MONGODB_USER');
const password = getEnvVar('MONGODB_PASSWORD');
const url = getEnvVar('MONGODB_URL');
const db = getEnvVar('MONGODB_DB');

const DB_URI = `mongodb+srv://${user}:${password}@${url}/${db}?appName=Cluster0`;

export const initMongoConnection = async () => {
  await mongoose.connect(DB_URI);
};
