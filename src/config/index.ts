import dotenv from "dotenv";

dotenv.config();

export default {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    FIREBASE_PROJECT_ID: process.env.FIREBASE_PROJECT_ID,
    FIREBASE_PRIVATE_KEY_ID: process.env.FIREBASE_PRIVATE_KEY_ID,
    FIREBASE_PRIVATE_KEY:
        process.env.FIREBASE_PRIVATE_KEY &&
        process.env.FIREBASE_PRIVATE_KEY.replace(/\\n/g, "\n"),
    FIREBASE_CLIENT_EMAIL: process.env.FIREBASE_CLIENT_EMAIL,
    FIREBASE_CLIENT_ID: process.env.FIREBASE_CLIENT_ID,
    FIREBASE_AUTH_URI: process.env.FIREBASE_AUTH_URI,
    FIREBASE_TOKEN_URI: process.env.FIREBASE_TOKEN_URI,
    FIREBASE_AUTH_CERT_URL: process.env.FIREBASE_AUTH_CERT_URL,
    FIREBASE_CLIENT_CERT_URL: process.env.FIREBASE_CLIENT_CERT_URL
};