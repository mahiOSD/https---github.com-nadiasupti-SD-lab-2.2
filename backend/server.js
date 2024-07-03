import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import jobsRouter from './routes/jobs.js'; 
import authRouter from './routes/auth.js'; 

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;


app.use(cors({
  origin: 'http://localhost:5173', 
  credentials: true 
}));
app.use(express.json());

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
.then(() => {
  console.log('MongoDB database connection established successfully');
})
.catch(err => {
  console.error('Could not connect to MongoDB:', err);
});


app.use('/api/auth', authRouter); 
app.use('/api/jobs', jobsRouter); 


app.listen(port, () => {
  console.log(`Server is running on port: ${port}`);
});
