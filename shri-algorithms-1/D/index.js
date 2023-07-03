const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, timeString] = content.toString().split('\n');

if (n <= 1) {
    fs.writeFileSync('output.txt', '0');
    return;
}

const times = timeString.trimEnd().split(' ');

const format = (str) => {
    const [HH, MM] = str.split(':');
    return +HH * 60 + +MM;
};


let sorted = times.map(format).sort();

const day = 24 * 60;

let min = day - sorted.at(-1) + sorted[0];

for (let i = 0, j = 1; j < n; j += 1, i += 1) {
    const diff = sorted[j] - sorted[i];
    if (!min) {
        min = diff;
        continue;
    }

    if (diff < min) {
        min = diff;
    }
}

fs.writeFileSync('output.txt', min.toString());
