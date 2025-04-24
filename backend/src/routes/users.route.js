import {Router} from 'express'
import {getUsers, postUser, getOneUser, deleteUser, updateUser} from '../controllers/users.controller.js'

const router = Router()

router.get('/', getUsers)
router.post('/', postUser)

router.get('/:id_user', getOneUser)
router.delete('/:id_user', deleteUser)
router.put('/:id_user', updateUser)

export default router