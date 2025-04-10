import express from 'express'

import { all, create, update, remove } from '../controllers/project.controller'

const router = express.Router()

router.get('/', all)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
