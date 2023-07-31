const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, numsString] = content.toString().split('\n');
const nums = numsString.trim().split(' ').map(Number);

function f(n, ages) {
    ages.sort((a, b) => a - b);
    let left = 0;
    let right = 0;
    let ans = 0;

    for (let i = 0; i < n; i++) {
        while (left < n && ages[left] <= 0.5 * ages[i] + 7) {
            left++;
        }
        while (right < n && ages[right] <= ages[i]) {
            right++;
        }
        if (right > left + 1) {
            ans += right - left - 1;
        }
    }

    return ans;
}

const result = f(n, nums);

console.log( result);
fs.writeFileSync('output.txt', result.toString());