// Challenge: Append a message to notes.txt
// 1. Use appendFileSync to append to the file.
// 2. Run the script
// 3. Check your work by opening the file and viewing the appended text.

const fs = require('fs');

try {
    fs.appendFileSync('../notes-app/notes.txt', ' I am currently learning Node.js');
    console.log('Text appended successfully.');
} catch (err) {
    console.log('Action could not be performed.');
}
