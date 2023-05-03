// https://contest.yandex.ru/contest/8458/problems/E/
const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [a, b] = content.toString().split('\n');

if (a.length !== b.length) {
    fs.writeFileSync('output.txt', (0).toString());
    return;
}

for (let i = 0, j = a.length - 1; i <= a.length; i += 1, j -= 1) {
    if (a[i] !== b[j]) {
        fs.writeFileSync('output.txt', (0).toString());
        return;
    }
}

fs.writeFileSync('output.txt', (1).toString());
