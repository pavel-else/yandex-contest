const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsString, q, ...lines] = content.toString().split('\n');
const nums = numsString.split(' ').map(Number);

const dict = [0];
let count = 0;

for (let i = 0; i < n; i += 1) {
    if (nums[i] > 0) {
        count += 1;
    }
    dict.push(count);
}

const result = [];
for (let i = 0; i < q; i += 1) {
    const [l, r] = lines[i].split(' ').map(Number);

    const min = dict[l - 1];
    const max = dict[r];
    if (min === max) {
        result.push(max);
    } else {
        result.push(max - min);
    }
}

fs.writeFileSync('output.txt', result.join('\n'));