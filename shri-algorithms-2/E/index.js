const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsStr] = content.toString().split('\n').map(i => i.trim());
const nums = numsStr.split(' ').map(Number);

const d = {};

for (let i = 0; i < nums.length; i++) {
  d[nums[i]] = (d[nums[i]] || 0) + 1;
}

let max = 0;
for (let i = 0; i < nums.length; i++) {
  max = Math.max(
    max,
    (d[nums[i]] || 0) + (d[nums[i] + 1] || 0),
    (d[nums[i]] || 0) + (d[nums[i] - 1] || 0)
  );
}

fs.writeFileSync('output.txt', (n - max).toString());