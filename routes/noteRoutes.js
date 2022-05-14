const router = require('express').Router();
const { noteArray } = require('../db/db.json');
const { createNewNote, deleteNote } = require('../lib/notes');
//route for api get requests responds with notesArray
router.get('/notes', (req, res) => {
    res.json(noteArray);
});
//route for api post requests processes request into notesArray, writes that array via imported function, responds with new note
router.post('/notes', (req, res) => {
    req.body.id = noteArray.length.toString();
    const note = createNewNote(req.body, noteArray);
    res.json(note);
});
//route for api delete requests splices requested note from array via id/index updates notes ids to index responds with updated array to update html
//via functions on the front end
router.delete('/notes/:id', (req, res) => {
    noteArray.splice(req.params.id, 1);
    deleteNote(noteArray);
    res.json(noteArray);
})

module.exports = router;