import express from 'express'

import { all, get, getTasks, create, update, remove } from '../controllers/list.controller'

const router = express.Router()

router.get('/', all)
router.get('/:id', get)
router.get('/:id/tasks', getTasks)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
