import express from 'express'

const router = express.Router()
import { registerUSer, loginUSer, getUSer } from '../controller/userController.js'
import { protect } from '../middleware/authMiddleware.js'

router.post('/', registerUSer)
router.post('/login', loginUSer)
router.get('/getUser', protect, getUSer)

export default router