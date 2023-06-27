const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n] = content.toString().split('\n');



fs.writeFileSync('output.txt', (n).toString());