const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsStr] = content.toString().split('\n').map(i => i.trim());
const nums = numsStr.split(' ').map(Number);

let ref
const dict = {};
const halfN = Math.floor(n / 2);

for (let i = 0; i < n; i += 1) {
    if (!dict[nums[i]]) {
        dict[nums[i]] = 0;
    }

    dict[nums[i]] += 1;
    
    if (!ref || (dict[ref] < dict[nums[i]])) {
        ref = nums[i];
    }

    // Если число повторялось более чем n / 2 раз, то нет смысла искать дальше
    if (dict[ref] > halfN) {
        break;
    }
}

fs.writeFileSync('output.txt', ref.toString());