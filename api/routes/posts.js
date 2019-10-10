const express = require('express')
const router = express.Router();
const c = require('../controllers/posts');

router.get('/', c.get_all);
router.get('/post', c.get_single);



module.exports = router;