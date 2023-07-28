const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsString] = content.toString().split('\n');
const nums = numsString.trim().split(' ').map(Number);

const dict = [];
for (let i = 0; i < n; i += 1) {
    // Малышей не пригашают по условию 1.
    if (nums[i] <= 7.5) {
        continue;
    }

    if (!dict[nums[i]]) {
        dict[nums[i]] = 0;
    }

    dict[nums[i]] += 1;
}

const sortedAges = [];
for (let i in dict) {
    sortedAges.push(+i);
}

let l = 0;
let result = 0;

if (sortedAges.length <= 1 && dict[sortedAges[0]] <= 1) {
    fs.writeFileSync('output.txt', result.toString());
    return;
}

for (let r = 0; r < sortedAges.length; r += 1) {
    const lim = Math.min(sortedAges[r] * 0.5 + 7, sortedAges[r]);
    
    while (sortedAges[l] <= lim) {
        l += 1;
    }
    console.log('l, r', l, r);

    for (let j = l; j <= r; j += 1) {
        result += dict[sortedAges[j]];
    }

    if (dict[sortedAges[r]] === 1) {
        result -= 1; // Приглашение нельзя прислать самому себе
    }
}

console.log( sortedAges, result);
fs.writeFileSync('output.txt', result.toString());