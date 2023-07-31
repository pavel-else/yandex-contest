// Была мысль оптимизировать первое решение с помощью мемоизации. Большого прироста не вышло. TL на 21 тесте.
const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsString] = content.toString().split('\n');
const nums = numsString.trim().split(' ').map(Number);

const memo = {};

const getCountOffers = (age) => {
    if (memo[age]) {
        return memo[age];
    }

    const min = age / 2 + 7;
    let result = -1; // Приглашение нельзя прислать самому себе

    for (let i = 0; i < n; i += 1) {
        if (nums[i] <= min || nums[i] > age) {
            continue;
        }
        result += 1;
    }
    // Из-за условия +7 может случиться так, что min > age, и приглашение нельзя отправить даже ровестникам.
    const max = Math.max(result, 0);
    memo[age] = max;
    return max;
};

let result = nums.reduce((acc, age) => acc + getCountOffers(age), 0);
fs.writeFileSync('output.txt', result.toString());