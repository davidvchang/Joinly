import {Router} from 'express'
import {getUsers, postUser} from '../controllers/users.controller.js'

const router = Router()

router.get('/', getUsers)
router.post('/', postUser)

router.get('/:id_user')
router.delete('/:id_user')
router.put('/:id_user')

export default router