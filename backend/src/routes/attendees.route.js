import {Router} from 'express'
import {getAttendees, postAttendees, deleteAttendees, getMyEventAttendee, getAllAttendees} from '../controllers/attendees.controller.js'
import verifyToken from '../middlewares/verifyToken.js'

const router = Router()

router.get('/', getAllAttendees)
router.get('/:event_id', getAttendees)
router.post('/:event_id', verifyToken, postAttendees)
router.delete('/:event_id', verifyToken, deleteAttendees)
router.get('/:event_id/me', verifyToken, getMyEventAttendee)

export default router