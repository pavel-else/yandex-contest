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

const isBetween = (p, x1, x2) => {
  const [min, max] = x1 < x2 ? [x1, x2] : [x2, x1];
  return min <= p && p <= max;
};

const isPointInMap = ([px, py], [x1, y1, x2, y2]) => {
  return isBetween(px, x1, x2) && isBetween(py, y1, y2);
};

const isIntersect = (map1, map2) => {
  const min2 = getMin(map2);
  if (isPointInMap(min2, map1)) {
    return true;
  }
  const min1 = getMin(map1);

  return isPointInMap(min1, map2);
};

const toIndexed = (maps = []) => {
  const indexed = [];

  maps.forEach((map, index) => {
    const fragment = { index, box: map, indexes: [] };

    indexed.forEach((item) => {
      if (isIntersect(item.box, fragment.box)) {
        fragment.indexes.push(item.index);
      }
    });

    indexed.push(fragment);
  });

  return indexed;
};

const run = (maps) => {
  const indexed = toIndexed(maps);

  const result = [];

  for (let i = 0; i < indexed.length; i += 1) {
    const current = indexed[i];

    const finded = indexed.find((item) => item?.indexes.includes(i));
    if (!finded) {
      result.push(current);
    } else {
      const boxMin = getMin(finded.box);
      const currentMin = getMin(current.box);
      const boxMax = getMax(finded.box);
      const currentMax = getMax(current.box);

      const newMin =
        boxMin[0] < currentMin[0]
          ? boxMin
          : boxMin[1] < currentMin[1]
          ? boxMin
          : currentMin;
      const newMax =
        boxMax[0] > currentMax[0]
          ? boxMax
          : boxMax[1] > currentMax[1]
          ? boxMax
          : currentMax;
      finded.box = [...newMin, ...newMax];
      finded.indexes = [...finded.indexes, ...current.indexes];
      delete indexed[i];
    }
  }

  return indexed.filter(Boolean).map((item) => {
    const indexes = new Set(item.indexes);
    indexes.add(item.index);

    return {
      box: item.box,
      indexes: Array.from(indexes),
      // indexes: item.indexes,
    };
  });
};

// const maps = [
//   [4, 4, 8, 8],
//   [6, 6, 10, 10],
//   [4, 12, 8, 16],
//   // [5, 5, 6, 6],
// ];

// console.log(isIntersect([4, 4, 5, 5], [2, 2, 8, 8]) === true);
// console.log(isIntersect([2, 2, 8, 8], [4, 4, 5, 5]) === true);
// console.log(isIntersect([2, 2, 5, 5], [5, 5, 6, 6]) === true);
// console.log(isPointInMap([5, 5], [5, 5, 6, 6]));

// console.log(run(maps));

module.exports = run;
