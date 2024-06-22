import express from 'express';
import { registerUser } from '../controllers/authController.js'; // Ensure the correct path

const router = express.Router();

// Define the signup route
router.post('/signup', registerUser);
router.post('/login', loginUser);

export default router;
