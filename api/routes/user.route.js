import express from 'express';
import { getUser, profilePosts, savePost, updateUser } from '../controllers/user.controller.js';
import verifyToken from '../middleware/varifyToken.js';
const router = express.Router();

router.get('/:id', getUser);
router.put('/:id', verifyToken, updateUser);
router.post('/save', verifyToken, savePost);
router.get('/profilePosts', verifyToken, profilePosts);

export default router;