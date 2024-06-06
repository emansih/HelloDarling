import { Router } from 'express';
import { getAllUsers, getUserAvilability, setUserDates, getUserDates, getUserDietaryRestrictions } from '../controllers/userController';

const router = Router();

router.get('/users', getAllUsers);

router.get('/users/:id/availability', getUserAvilability);

router.get('/users/:id/dietaryRestrictions', getUserDietaryRestrictions);

router.get('/users/:id/userDates', getUserDates);

router.post('/users/booking', setUserDates)

export default router;
