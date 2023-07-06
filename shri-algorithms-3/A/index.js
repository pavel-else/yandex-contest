// Первое решение уперлось в TL на 13 тесте. Надо оптимизировать
const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [, numsString, q, ...qs] = content.toString().split('\n');
const nums = numsString.split(' ');

const result = [];
for (let i = 0; i < q; i += 1) {
    const [l, r] = qs[i].split(' ').map(Number);
    let count = 0;

    for (let j = l - 1; j <= r - 1; j += 1) {
        if (nums[j] > 0) {
            count += 1;
        }
    }
    result.push(count);
}

fs.writeFileSync('output.txt', result.join('\n'));