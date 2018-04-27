const fs = require('fs');

fs.readFile('input.txt', (err, res) => {
    console.time('Time');
    if (err) throw err;
    let fileContent = res.toString();
    let count = 0;
    let fileLength = fileContent.length;
    for (let i=0; i<fileLength; i++) {
        if (fileContent[i] == '('){
            count++;
        } else {
            count--;
        }
    }
    console.timeEnd('Time');
    console.log("Santa is on floor", count + ".");
});