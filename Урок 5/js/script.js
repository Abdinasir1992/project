"use strict"; // - эта директива показывет что мы будем использовать новый вариант записи кода

let number = 5;
const leftBorderWidth = 1; //постоянная переменная

number = 10;
console.log(number);

const obj = {
    a: 50
}; // прямых коснтант в JS не бывает, т.е. можно изменять

obj.a = 10;

console.log(obj);


var name = 'Ivan'; //старый вариант объявления пременной, уже не используется

// Разница между let и var, в том, что let не видим за пределами скобок, а var можно вызвать за пределами скобок
// {
//     let result = 50;
// }

// console.log(result);

// старые брузеры не поддерживают новый вид записи
// поэтому в случае необходимости поддержки в старых браузерах нужно переменные объявлять через var
