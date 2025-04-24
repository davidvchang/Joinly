import {Router} from 'express'

const router = Router()

router.get('/')
router.post('/')

router.get('/:id_user')
router.delete('/:id_user')
router.put('/:id_user')

export default router