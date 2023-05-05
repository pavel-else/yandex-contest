// Удалось избавиться от рекурсии и организовать обход в ширину
const fs = require('fs');

function parse() {
  let content = fs.readFileSync('input.txt', 'utf8').split('\n');
  const citiesCount = +content[0];
  // Долгое время не удавалось победить RE. А дело было в последней пустой строчке файла
  // const [indexFrom, indexTo] = content[content.length - 1].split(' ');
  const [indexFrom, indexTo] = content[1 + citiesCount + 1].split(' ').map(Number);
  const map = content.slice(1, citiesCount + 1).map((str) => str.split(' ').map(Number));

  return {
    citiesCount,
    map,
    limit: +content[citiesCount + 1],
    indexFrom: indexFrom - 1,
    indexTo: indexTo - 1,
    from: map[indexFrom - 1],
    to: map[indexTo - 1]
  }
}

function getDistance(a, b) {
  return Math.abs(a[0] - b[0]) + Math.abs(a[1] - b[1]);
}

const { map, limit, indexFrom, indexTo } = parse();

const search = () => {
  if (indexFrom === indexTo) {
    return 0;
  }

  const queue = [[indexFrom, 0]];
  const visited = [];
  visited[indexFrom] = true;

  
  while (queue.length > 0) {
    const [current, length] = queue.shift();

    if (current === indexTo) {
      return length;
    }

    for (let i = 0; i < map.length; i += 1) {
      if (i in visited) {
        continue;
      }

      if (getDistance(map[i], map[current]) <= limit) {
        visited[i] = true;
        queue.push([i, length + 1]);
      }
    }
  }

  return -1;
};


const bestWayLength = search();

fs.writeFileSync('output.txt', (bestWayLength).toString());