import 'dotenv/config';

export const getEnvVar = (envVar) => {
  return process.env[envVar];
};
