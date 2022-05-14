const fs = require('fs');
const path = require('path');
//updates note array and writes the new array to db.json file
function createNewNote(body, noteArray) {
    noteArray.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ noteArray }, null, 2)
    )
    return body;
};
//updates id of noteArray after individual note is deleted by id, rewrites the new array to the db.json file
function deleteNote(noteArray) {
    let i = 0;
    noteArray.forEach(element => {
        element.id = i;
        i++
    });
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ noteArray }, null, 2)
    )
}

module.exports = { createNewNote, deleteNote };