// Первая реализация "в лоб" набрала 29.9 баллов из 80.
// Половина тестов уперлась в TL
// Нужно более быстрое решение

module.exports = function n(n, k) {
  const isLucky = (num, n) => {
    let acc = 0;

    const str = num.toString();
    let prev = str[0];

    for (let i = 0; i < str.length; i += 1) {
      if (+prev > +str[i]) {
        return false;
      }
      prev = str[i];

      acc += +str[i];
    }

    return acc === n;
  }

  let min
  let max
  let count = 0;

  const limitMin = Array(k).fill(1).join('');
  const limitMax = Array(k).fill(9).join('');

  for (let i = limitMin; +i <= limitMax; i = String(+i + 1)) {
    if (i.toString().length < k) {
      continue;
    }
    if (i.toString().includes('0')) {
      continue;
    }

    if (isLucky(i, n)) {
      count += 1;

      if (!min) {
        min = +i;
      }

      max = +i;
    }
  }


  if (count) {
    return [count, min, max];
  }

  return [count];
}