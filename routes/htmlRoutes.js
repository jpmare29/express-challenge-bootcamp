const router = require('express').Router();
const path = require('path');
//root route to display index.html file
router.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'))
})
//note route to display note creation page
router.get('/notes', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/notes.html'))
})

module.exports = router;