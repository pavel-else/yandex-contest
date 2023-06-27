const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n] = content.toString().split('\n');

let t = n;
let r = 0;

while (r < t) {
    r += 1;
    t -= r;
}

fs.writeFileSync('output.txt', (r).toString());