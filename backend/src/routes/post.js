const express = require('express');
const { getPosts, createPost, getUserPosts } = require('../controller/postController');
const auth = require('../middleware/auth');
const router = express.Router();

router.get('/', getPosts);
router.post('/', auth, createPost);
router.get('/user/:userId', getUserPosts);

module.exports = router;