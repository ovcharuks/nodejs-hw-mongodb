import 'dotenv/config';
import mongoose from 'mongoose';

export const getEnvVar = (envVar) => {
  return process.env[envVar];
};
