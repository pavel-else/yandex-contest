const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const str = content.toString().trim();

const hash = {};
for (let i = 0; i < 10; i += 1) {
    hash[i] = new Set();
}

for (let i = 1; i < str.length; i += 2) {
    hash[str[i]].add(str[i - 1]);
}

let result = 0;
for (let i = 0; i < 10; i += 1) {
    if (hash[i].size === 3) {
        result += 1;
    }
}

fs.writeFileSync('output.txt', result.toString());