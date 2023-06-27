const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [rawPath] = content.toString().split('\n');

const split = rawPath.split('/').filter((item) => !!item);

const result = [];

split.forEach((item) => {
    if (item === '..') {
        result.pop();
        return;
    }
    if (item === '.') {
        return;
    }
    result.push(item);
})

fs.writeFileSync('output.txt', ('/' + result.join('/')));