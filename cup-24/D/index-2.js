const norm = ([x1, y1, x2, y2]) =>
  x1 < x2 ? [x1, y1, x2, y2] : [x2, y2, x1, y1];

const getMin = ([x1, y1, x2, y2]) => {
  if (x1 < x2 && y1 < y2) {
    return [x1, y1];
  }

  return [x2, y2];
};

const getMax = ([x1, y1, x2, y2]) => {
  if (x1 > x2 && y1 > y2) {
    return [x1, y1];
  }

  return [x2, y2];
};

function isIntersect(map1, map2) {
  // Разворачиваем координаты для удобства
  const [x1, y1, x2, y2] = map1;
  const [x3, y3, x4, y4] = map2;

  // Проверяем, не пересекаются ли прямоугольники
  if (x1 > x4 || x3 > x2) {
    return false; // Один из прямоугольников находится полностью справа от другого
  }
  if (y1 > y4 || y3 > y2) {
    return false; // Один из прямоугольников находится полностью выше другого
  }

  // Если ни одно из условий выше не выполнено, прямоугольники пересекаются
  return true;
}

const run = (maps) => {
  const sortedMaps = maps.sort((a, b) => {
    if (norm(a)[0] < norm(b)[0]) {
      return -1;
    }
    if (norm(a)[0] > norm(b)[0]) {
      return 1;
    }
    if (norm(a)[1] < norm(b)[1]) {
      return -1;
    }
    return 1;
  });

  const result = [];

  sortedMaps.forEach((map, index) => {
    let mmap = map;
    if (!result.length) {
      result.push({ box: mmap, indexes: [index] });
      return;
    }

    let inters = false;
    console.log("1", 1);

    for (const last of result) {
      if (isIntersect(norm(last.box), norm(mmap))) {
        inters = true;
        const [lx1, ly1, lx2, ly2] = norm(last.box);
        const [mx1, my1, mx2, my2] = norm(mmap);

        const box = [
          Math.min(lx1, mx1),
          Math.min(ly1, my1),
          Math.max(lx2, mx2),
          Math.max(ly2, my2),
        ];
        result[result.length - 1] = {
          box,
          indexes: [...last.indexes, index],
        };
        mmap = result[result.length - 1];
      }
    }

    if (!inters) {
      result.push({ box: mmap, indexes: [index] });
    }
  });

  return result;
};

const maps = [
  [8, 8, 4, 4],
  [6, 6, 10, 10],
  [4, 12, 8, 16],
];

// const maps = [
//   [2, 2, 5, 5],
//   [3, 1, 4, 4],
// ];

// const maps = [
//   [6, 6, 4, 4],
//   [5, 5, 3, 3],
// ];

// const maps = [
//   [1, 1, 8, 2],
//   [1, 1, 2, 8],
//   [8, 8, 7, 7],
// ];

// const maps = [
//   [1, 1, 2, 2],
//   [1, 1, 8, 8],
//   [8, 8, 7, 7],
//   [9, 9, 12, 10],
//   [9, 9, 10, 12],
// ];

// const maps = [
//   [0, 0, 1, 2],
//   [0, 5, 1, 7],
//   [0, 1, 1, 6],
// ];

console.log(run(maps));
// console.log(norm([1, 1, 0, 0]));

module.exports = run;
