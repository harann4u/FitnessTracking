import { Router } from 'express';
import { signup, login, refreshToken} from '../controller/auth.controller';
import { saveUserDetails } from '../controller/user/user.controller';


const router = Router();

// auth Porcess
router.post('/signup',signup as any);
router.post('/login',login)
router.get('/refresh-token',refreshToken)

// User
router.post('/user-details',saveUserDetails)

export default router;
