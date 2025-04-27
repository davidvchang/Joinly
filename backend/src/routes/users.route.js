import {Router} from 'express'
import {getUsers, postUser, getOneUser, deleteUser, updateUser, loginUser, logoutUser} from '../controllers/users.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get('/', getUsers)
router.post('/', postUser)

router.get('/:id_user', getOneUser)
router.delete('/:id_user', deleteUser)
router.put('/:id_user', updateUser)

router.post('/auth/login', loginUser)
router.post('/logout', logoutUser)

router.get('/auth/check', verifyToken, (req, res) => {
    res.status(200).json({ message: 'Authenticated', user: req.user });
})

export default router