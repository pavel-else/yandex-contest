const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [dictStr, text] = content.toString().split('\n').map(i => i.trim());

const dict = {};

dictStr.split(' ').forEach((word) => {
    let bitWord = '';
    for (let i = 0; i < word.length; i += 1) {
        bitWord += word[i];

        if (!dict[bitWord]) {
            dict[bitWord] = 1;
        } else if (dict[bitWord] === 2) {
            return;
        }
    }
    dict[bitWord] = 2;
});


let result = [];
text.split(' ').forEach((word) => {
    let bitWord = '';
    for (let i = 0; i < word.length; i += 1) {
        bitWord += word[i];
        
        if (!dict[bitWord]) {
            result.push(word);
            return;
        }
        
        if (dict[bitWord] === 2) {
            result.push(bitWord);
            return;
        }
    }

    result.push(bitWord);
});

fs.writeFileSync('output.txt', result.join(' '));