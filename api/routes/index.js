import { Router } from 'express';

import postsRoutes from './posts';

const router = Router();

router.use('/posts', postsRoutes);

export default router;
