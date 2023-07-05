const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [nkString, numsString] = content.toString().split('\n');
const [n, k] = nkString.trim().split(' ').map(Number);
const nums = numsString.trim().split(' ').map(Number);

const hash = {};
for (let i = 0; i < n; i += 1) {
    if ((nums[i] in hash) && i - hash[nums[i]] <= k) {
        fs.writeFileSync('output.txt', 'YES');
        return;
    }

    hash[nums[i]] = i;
}

fs.writeFileSync('output.txt', 'NO');