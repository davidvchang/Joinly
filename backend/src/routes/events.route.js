import {Router} from 'express'
import {getEvents, postEvent, getOneEvent, deleteEvent, updateUser, getEventAttendUser} from '../controllers/events.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get('/user', verifyToken, getEventAttendUser)

router.get('/', getEvents)
router.post('/', verifyToken, postEvent)

router.delete('/:id_event', verifyToken, deleteEvent)
router.put('/:id_event', verifyToken, updateUser)
router.get('/:id_event', getOneEvent)


export default router