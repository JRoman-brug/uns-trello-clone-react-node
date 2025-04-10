import express from 'express'

import { all, create, update, updateStatus, remove } from '../controllers/task.controller'

const router = express.Router({
  mergeParams: true,
})

router.get('/', all)
router.post('/', create)
router.put('/:id', update)
router.patch('/:id', updateStatus)
router.delete('/:id', remove)

export default router
