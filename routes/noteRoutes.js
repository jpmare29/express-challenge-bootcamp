const router = require('express').Router();
const { noteArray } = require('../db/db.json');
const { createNewNote } = require('../lib/notes');

router.get('/notes', (req, res) => {
    res.json(noteArray);
});

router.post('/notes', (req, res) => {
    req.body.id = noteArray.length.toString();
    const note = createNewNote(req.body, noteArray);
    res.json(note);
});

module.exports = router;