const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, pricesString] = content.toString().split('\n');
const prices = pricesString.split(' ');

let min = 0;
let max = 0;

let bestCandle = [0, 0];

for (let i = 0; i < n; i += 1) {
    // console.log('min, max', min, max);
    // increment current candle
    if (+prices[i] > +prices[max]) {
        max = i;
        continue;
    }
    
    // new candle
    if (+prices[i] < +prices[min]) {
        console.log('min, max', prices[min], prices[max], prices[bestCandle[1]], prices[bestCandle[0]]);
        if (+prices[max] - +prices[min] > +prices[bestCandle[1]] - +prices[bestCandle[0]]) {
            bestCandle = [min, max];
        }

        min = i;
        max = i;
        continue;
    }
}

console.log('bestCandle', bestCandle);

// fs.writeFileSync('output.txt', min );