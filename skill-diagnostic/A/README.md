# A. Подсчитать количество вхождений символа в строку

https://contest.yandex.ru/contest/32857/problems/A/

Написать функцию, которая принимает на вход 2 аргумента: строку и символ. Функция должна вернуть количество вхождений символа (второго аргумента) в строке (первом аргументе).

Примечания
Исходный код нужно оформить следующим образом:

module.exports = function (str, symbol) {
// ваше решение
return result;
}
Пример использования:

const countSymbol = require('..');
countSymbol('Hello', 'o'); // 1
countSymbol('Hello', 'l'); // 2
countSymbol('Hello', 'H'); // 1
countSymbol('Hello', 'h'); // 0
