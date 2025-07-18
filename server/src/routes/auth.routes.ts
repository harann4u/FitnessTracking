import { Router } from 'express';
import { signup, login, refreshToken} from '../controller/auth.controller';
import { saveUserDetails } from '../controller/user/user.controller';


const router = Router();

router.post('/signup',signup);
router.post('/login',login)
router.get('/refresh-token',refreshToken)
router.post('/user-details',saveUserDetails)

export default router;
