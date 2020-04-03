import { Router } from 'express';
import { get_all, get_single } from '../controllers/posts';

const router = Router();

router.get('/', get_all);
router.get('/post', get_single);

export default router;
