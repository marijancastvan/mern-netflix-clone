import jwt from 'jsonwebtoken'; 
import { ENV_VARS } from '../config/envVars.js';

export const generateTokenAndSetCookie = (userId, res) => {
    const token = jwt.sign({ userId }, ENV_VARS.JWT_SECRET, { expiresIn: '15d' });

    res.cookie("jwt-netflix", token, {
        maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days in MS
        httpOnly: true, // prevent XSS attacks cross-site scripting attacks, make it not be accessible from JavaScript
        sameSite: "strict", // prevent CSRF attacks cross-site request forgery attacks, make it not be sent with cross-site requests
        secure: ENV_VARS.NODE_ENV !== "development" // only send cookie over HTTPS in production
    });
    
    return token;
};