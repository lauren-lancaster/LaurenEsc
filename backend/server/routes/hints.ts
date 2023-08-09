import express from 'express'
import * as db from '../db/hints'

const router = express.Router()

router.get('/:id', async (req, res, next) => {
  const id = +req.params.id
  try {
    const hint = await db.getSingleHint(id)
    res.json(hint)
  } catch (e) {
    next(e)
  }
})

export default router
