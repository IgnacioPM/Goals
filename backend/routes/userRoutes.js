import express from 'express'

const router = express.Router()
import { registerUser, loginUser, getUser } from '../controller/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/', registerUser)
router.post('/login', loginUser)
router.get('/getUser', protect, getUser)

export default router