import express from 'express'

import { all, get, create, update, updateStatus, remove } from '../controllers/task.controller'

const router = express.Router()

router.get('/', all)
router.get('/:id', get)
router.post('/', create)
router.put('/:id', update)
router.patch('/:id', updateStatus)
router.delete('/:id', remove)

export default router
