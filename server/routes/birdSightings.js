const express = require('express')
const router = express.Router()

const sightings = require('../db/birdSightings')

router.get('/:id', (req, res) => {
  const userId = Number(req.params.id)
  sightings.getBirdSightings(userId)
    .then((userSightings) => {
      res.status(200).json(userSightings)
      return null
    })
    .catch(err => {
      res.status(500).send('SERVER SIDE API ERROR ' + err)
    })
})

router.post('/:username/:latitude/:longitude/:birdName', (req, res) => {
  const { username, latitude, longitude, birdName } = req.body
  sightings.addUserSighting(username, latitude, longitude, birdName)
    .then((sighting) => {
      res.status(200).json(sighting)
      return null
    })
    .catch(err => {
      res.status(500).send('SERVER SIDE API ERROR ' + err)
    })
})

module.exports = router
