// Первое решение валит какие-то тесты.
const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, pricesString] = content.toString().split('\n');
const p = pricesString.split(' ');

let min = 0;
let max = 0;

const candles = [];

for (let i = 0; i < n; i += 1) {
    if (+p[i] > +p[max]) {
        max = i;
        continue;
    }
    
    if (+p[i] < +p[min]) {
        candles.push([min, max]);
        min = i;
        max = i;
    }
}

candles.push([min, max]);
let best = candles[0];

// result
for (let i = 0; i < candles.length; i += 1) {
    if (candles[i][0] === candles[i][1]) {
        continue;
    }
    if ((+p[candles[i][1]] - +p[candles[i][0]]) > (+p[best[1]] - +p[best[0]])) {
        best = candles[i];
    }
}

const result = best[0] === 0 && best[1] === 0 ? '0 0' : `${best[0] + 1} ${best[1] + 1}`;
fs.writeFileSync('output.txt', result);
