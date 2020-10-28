import { Router } from 'express';
import * as posts from '../controllers/posts';

const router = Router();

router.get('/', posts.get_all);
router.get('/post', posts.get_single);

export default router;
