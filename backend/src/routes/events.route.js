import {Router} from 'express'
import {getEvents, postEvent, getOneEvent, deleteEvent, updateUser} from '../controllers/events.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get('/', getEvents)
router.post('/', verifyToken, postEvent)

router.get('/:id_event', getOneEvent)
router.delete('/:id_event', verifyToken, deleteEvent)
router.put('/:id_event', verifyToken, updateUser)

export default router