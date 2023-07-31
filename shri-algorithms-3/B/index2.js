// Запутался в условиях, падаю на 5 тесте
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

const getCount = (r) => {
    const base = dict[r];
    const limit = r * 0.5 + 7;

    let l = Math.floor(limit);

    // Перебираем младшие возрастные группы
    let other = 0;
    for (let i = l; i < r; i += 1) {
        if (!dict[i]) {
            continue;
        }

        if (limit >= i) {
            continue;
        }

        other += 1;
    }
    

    // Если в группе 1 человек, то приглашений внутри группы быть не может
    const baseOffers = base <= 1 ? 0 : base;
    return baseOffers + other * base;

};

for (let r = 0; r < sortedAges.length; r += 1) {
    result += getCount(sortedAges[r]);
}

console.log( sortedAges, result);
fs.writeFileSync('output.txt', result.toString());