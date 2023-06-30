// Первое решение валит какие-то тесты.
const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, pricesString] = content.toString().split('\n');

const cost = pricesString.split(' ').map(Number);
let bestBuyDay = 0;
let bestSellDay = 0;
let minCostDay = 0;

for (let i = 1; i < n; i++) {
    if (cost[bestSellDay] * cost[minCostDay] < cost[bestBuyDay] * cost[i]) {
        bestBuyDay = minCostDay;
        bestSellDay = i;
    }
    if (cost[i] < cost[minCostDay]) {
        minCostDay = i;
    }
}

if (bestSellDay === 0 && bestBuyDay === 0) {
    fs.writeFileSync('output.txt', '0 0');
} else {
    fs.writeFileSync('output.txt', `${bestBuyDay + 1} ${bestSellDay + 1}`);
}
