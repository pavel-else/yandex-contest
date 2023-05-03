// https://contest.yandex.ru/contest/8458/problems/D/

const fs = require('fs');
let content = fs.readFileSync('input.txt', 'utf8');

const braketsValidate = (str) => {
    if (!str.length) {
        return false;
    }

    let balance = 0;
    for (let i = 0; i <= str.length; i += 1) {
        if (str[i] === '(') {
            balance += 1;
        } else if (str[i] === ')') {
            balance -= 1;
        }
        if (balance < 0) {
            return false;
        }
    }
    if (balance !== 0) {
        return false;
    }
    return true;
};

const count = content.toString();

let acc = '';

// Чтобы вложиться в лимиты времени / памяти, приходится записывать результат в конечный файл порциями.
const run = (tmp = '', left = count, right = count) => {
    if (left === 0 && right === 0) {
        if (braketsValidate(tmp)) {
            acc += tmp + '\n';
            if (acc.length > 1000) {
                fs.appendFileSync('output.txt', acc);
                acc = '';
            }
        }
        return;
    }

    if (left > 0) {
        run(tmp + '(', left - 1, right);
    }

    if (right > 0) {
        run(tmp + ')', left, right - 1);
    }
};

run();

fs.appendFileSync('output.txt', acc);
