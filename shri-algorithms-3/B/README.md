# B. Бумеры и зумеры

https://contest.yandex.ru/contest/50340/problems/B/

## Legend

Площадка для выгула собак — место, где собираются и общаются люди разных возрастов. На одной из площадок Восточного Бирюлева хозяева собак очень дружны и приглашают друг-друга на день рождения.

Человек x не приглашает на день рождения человека y если выполнено хотя бы одно из условий:

- (Возраст человека y) <= 0.5 \* (Возраст человека x) + 7

- (Возраст человека y) > (Возраст человека x)

- (Возраст человека y) > 100 и одновременно с этим (Возраст человека x) < 100

Во всех остальных случаях человек x приглашает человека y на день рождения.

Определите суммарное количество приглашений на день рождения.

## Формат ввода

В первой строке вводится число n (1 ≤ n ≤ 100000).

Во второй строке вводится n чисел — возраст людей. Возраст находится в промежутке от 1 до 120.

## Формат вывода

Выведите одно число — суммарное количество приглашений.
