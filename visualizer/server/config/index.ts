import dotenv from 'dotenv';

// Load base .env file from visualizer directory (one level up from server)
dotenv.config({path: `${__dirname}/../.env`});

const envpath = process.env.NODE_ENV === 'development' ? `${__dirname}/../.env.development` : `${__dirname}/../.env.production`;

// Load environment-specific .env file
dotenv.config({ path: envpath });

export const config = {
  nodeEnv: process.env.NODE_ENV || 'development',
  mongoDbUri: process.env.MONGO_DB_URI || 'mongodb://localhost:27017/visualizer',
  anthropicApiKey: process.env.ANTHROPIC_API_KEY,
  jwt : {
    accessExpirationMinutes: process.env.JWT_ACCESS_EXPIRATION_MINUTES || 15,
    refreshExpirationDays: process.env.JWT_REFRESH_EXPIRATION_DAYS || 7,
    secret: process.env.JWT_SECRET || 'infra0-jwt-secret-1945',
  }
};

// Validate required environment variables
if (!config.anthropicApiKey) {
  console.warn('WARNING: ANTHROPIC_API_KEY environment variable is not set. Please set it in your .env file.');
}