// Валится тест №3. Я не знаю, как его побеждать. Тестовые примеры обрабатываются корректно.
const fs = require('fs');

let content = fs.readFileSync('input.txt', 'utf8');
const [n, timeString] = content.toString().split('\n');
const day = 24 * 60;

if (n <= 1) {
    fs.writeFileSync('output.txt', day.toString());
    return;
}

const times = timeString.trimEnd().split(' ');

const format = (str) => {
    const [h, m] = str.split(':');
    return +h * 60 + +m;
};


let sorted = times.map(format).sort();

let min = day - sorted.at(-1) + sorted[0];

for (let i = 1; i < n; i += 1) {
    const diff = sorted[i] - sorted[i - 1];

    if (diff < min) {
        min = diff;
    }
}

fs.writeFileSync('output.txt', min.toString());
