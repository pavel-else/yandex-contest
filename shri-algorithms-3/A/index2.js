const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsString, qCount, ...lines] = content.toString().split('\n');
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
for (let i = 0; i < qCount; i += 1) {
    const [l, r] = lines[i].split(' ').map(Number);
    result.push(dict[r] - dict[l - 1]);
}

fs.writeFileSync('output.txt', result.join('\n'));