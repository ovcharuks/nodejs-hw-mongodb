import 'dotenv/config';

export const getEnvVar = (name) => {
  const value = process.env[name];
  if (value) return value;

  throw new Error(`Missing process.env ${name}`);
};
