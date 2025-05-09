import {Router} from 'express'
import {getEvents, postEvent, getOneEvent, deleteEvent, updateEvent, getEventAttendUser, getEventJoinedUser, getNumberUsersJoined} from '../controllers/events.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get('/user/joined', verifyToken, getEventJoinedUser)
router.get('/user', verifyToken, getEventAttendUser)
router.get('/number/:id_event', getNumberUsersJoined)

router.get('/', getEvents)
router.post('/', verifyToken, postEvent)

router.delete('/:id_event', verifyToken, deleteEvent)
router.put('/:id_event', verifyToken, updateEvent)
router.get('/:id_event', getOneEvent)
router.get('/:id_event', getOneEvent)


export default router