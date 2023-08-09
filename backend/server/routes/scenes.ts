import express from 'express'
import * as db from '../db/scenes'

const router = express.Router()

router.get('/', async (req, res) => {
  try {
    const sceneArr = await db.getAllScenes()
    res.json(sceneArr)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})


router.get('/:id', async (req, res) => {
  const id = +req.params.id
  try {
    const scene = await db.getScene(id)
    res.json(scene)
  } catch (error) {
    console.error('Oh no, route error', error)
    res.sendStatus(500)
  }
})

export default router
