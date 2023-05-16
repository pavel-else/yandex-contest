// В решении используется рекурсивный обход всех возможных путей (обход в глубину).
// Локальные тесты проходит, но на контесте падает с RE
// Есть есть предположение, что это связано с переполнением стека вызова.
// Нужно искать другое решение (обход в ширину).

const fs = require('fs');

function parse() {
  let content = fs.readFileSync('input.txt', 'utf8').split('\n');
  const citiesCount = +content[0];
  const [indexFrom, indexTo] = content[1 + citiesCount + 1].split(' ').map(Number);
  const map = content.slice(1, citiesCount + 1).map((str) => str.split(' '));

  return {
    citiesCount,
    map,
    limit: content[citiesCount + 1],
    from: map[indexFrom - 1],
    to: map[indexTo - 1]
  }
}

function getDistance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

const isSame = (a, b) => {
  return a[0] === b[0] && a[1] === b[1];
};

const { citiesCount, map, limit, from, to } = parse();

let bestWayLength;

const run = (way = [], currentCity = from) => {
  // Если этот путь не лучший
  if (way.length >= bestWayLength) {
    return;
  }
  
  // Если путь зацикливается
  if (way.some((city) => isSame(city, currentCity))) {
    return;
  }
  
  // Если город слишком далеко
  if (way.length && getDistance(way[way.length - 1], currentCity) > limit) {
    return;
  }
  
  // Если дошли до точки назначения
  if (isSame(currentCity, to)) {
    bestWayLength = way.length;
    return;
  }

  const wayNext = [...way, currentCity];

  for (let i = 0; i < map.length; i += 1) {
    run(wayNext, map[i]);
  }
};

run();

fs.writeFileSync('output.txt', (bestWayLength).toString());