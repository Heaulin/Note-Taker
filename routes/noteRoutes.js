const router = require('express').Router()
let notes = require('../db/db.json')

// gets db.json & returns all notes as json
router.get('/notes', (req, res) => {
  res.json(notes)
})

// post and save new notes & add to db.json
router.post('/notes', (req, res) => {
  let newNote = req.body
  let newNoteId = notes.length
  newNote.id = newNoteId

  notes.push(newNote)
  console.log(newNote)
  res.sendStatus(200)
})

// delete notes by id and remove from db.json
router.delete('/notes/:id', (req, res) => {
  let id = req.params.id

  notes = notes.filter(note => note.id !== id)
  res.sendStatus(200)
})

module.exports = router