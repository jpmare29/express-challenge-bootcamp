const fs = require('fs');
const path = require('path');

function createNewNote(body, noteArray) {
    noteArray.push(body);
    fs.writeFileSync(
        path.join(__dirname, '../db/db.json'),
        JSON.stringify({ noteArray }, null, 2)
    )
    return body;
};

module.exports = { createNewNote };