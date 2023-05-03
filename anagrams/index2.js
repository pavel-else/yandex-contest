// https://contest.yandex.ru/contest/8458/problems/E/
const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [a, b] = content.toString().split('\n');

if (a.length !== b.length) {
    fs.writeFileSync('output.txt', (0).toString());
    return;
}

const hashedString = (str) => {
    const hash = {};

    for (let i = 0; i < str.length; i += 1) {
        if (!hash[str[i]]) {
            hash[str[i]] = 1;
            continue;
        }

        hash[str[i]] += 1;
    }

    return hash;
};

const hashA = hashedString(a);

for (let i = 0; i < b.length; i += 1) {
    if (!(b[i] in hashA) || hashA[b[i]] < 1) {
        fs.writeFileSync('output.txt', (0).toString());
        return;
    }

    hashA[b[i]] -= 1;
}

fs.writeFileSync('output.txt', (1).toString());
