const fs = require('fs');

const content = fs.readFileSync('input.txt', 'utf8');
const palindrome = content.toString().trim();

if (palindrome.length <= 1) {
    fs.writeFileSync('output.txt', '');
    return;
}

const result = palindrome.split('');
for (let i = 0; i < Math.floor(palindrome.length / 2); i += 1) {
    if (palindrome[i] !== 'a') {
        result[i] = 'a';
        break;
    }
}

if (result.join('') === palindrome) {
    result[result.length - 1] = 'b';
}

fs.writeFileSync('output.txt', result.join(''));