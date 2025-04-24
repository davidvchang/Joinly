import {Router} from 'express'
import {getEvents, postEvent, getOneEvent, deleteEvent, updateUser} from '../controllers/events.controller.js'

const router = Router()

router.get('/', getEvents)
router.post('/', postEvent)

router.get('/:id_event', getOneEvent)
router.delete('/:id_event', deleteEvent)
router.put('/:id_event', updateUser)

export default router