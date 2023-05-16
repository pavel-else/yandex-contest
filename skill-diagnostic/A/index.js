module.exports = function (str, symbol) {
  const hash = {};
  for (let i = 0; i < str.length; i += 1) {
    const current = str[i];

    if (!hash[current]) {
      hash[current] = 1;
      continue;
    }
      
    hash[current] += 1;
  }
  return hash[symbol] || 0;
}
