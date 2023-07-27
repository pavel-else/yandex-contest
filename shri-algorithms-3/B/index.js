const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsString] = content.toString().split('\n');
const nums = numsString.split(' ').map(Number);

const dict = [];

for (let i = 0; i < n; i += 1) {
    if (!dict[nums[i]]) {
        dict[nums[i]] = 0;
    }
    dict[nums[i]] += 1;
}

for (let i in dict) {
    console.log('i, dict[i]', i, dict[i]);
}
console.log('dict', dict);
// fs.writeFileSync('output.txt', result.join('\n'));