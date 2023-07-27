// Решение в лоб падает на 21 тесте в TL.
const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsString] = content.toString().split('\n');
const nums = numsString.trim().split(' ').map(Number);


const getCountOffers = (age) => {
    const min = age / 2 + 7;
    let result = -1; // Приглашение нельзя прислать самому себе

    for (let i = 0; i < n; i += 1) {
        if (nums[i] <= min || nums[i] > age) {
            continue;
        }
        result += 1;
    }
    // Из-за условия +7 может случиться так, что приглашение нельзя отправить даже ровестникам.
    return Math.max(result, 0);
};


let result = nums.reduce((acc, age) => acc + getCountOffers(age), 0);
fs.writeFileSync('output.txt', result.toString());