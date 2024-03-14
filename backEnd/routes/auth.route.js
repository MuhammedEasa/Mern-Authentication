import express from 'express'
import { Login, signup ,google} from '../controllers/auth.controller.js';

const router = express.Router();


router.post("/signup",signup)
router.post("/login",Login)
router.post("/google",google)
export default router