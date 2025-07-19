import { Router } from 'express';
import { saveUserDetails } from '../controller/user/user.controller';


const router = Router();


// User
router.post('/user-details',saveUserDetails)

export default router;
