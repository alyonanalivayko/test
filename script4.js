'use strict';
// конкатенация - сложение строк
let str1 = 'arr'+'- object';
console.log(str1);
console.log(typeof(str1));

//при сложении числа и строки - результат строка
let str2 = 4+'- object';
console.log(str2);
console.log(typeof(str2));

//если перед строкой поставить +(унарный плюс) - она превратится в числовое значение
let answer = +prompt("Есть ли вам 18?", "Да");
console.log(typeof(answer));

//Инкремент и дикремент
let incr =10,
    decr = 10;
incr++;     //11
decr--;     //9
console.log(incr);
console.log(decr); 

//перфиксная форма возвращает уже измененное значение
console.log(++incr);  //12
console.log(--decr);  //8

//постфиксная форма возвращает старое значение
console.log(incr++);    //12
console.log(decr--);    //8
console.log(incr++);    //13
console.log(decr--);    //7

// % - оператор вывода остатка от деления
console.log(5%3); 

// = - присваивание

// == - проверка на равенство
console.log("2" == 2);  //true - сравниваются значения

// === - строгая проверка по типам данных
console.log("2" === 2);  //false - разные типы данных

//логическое И ИЛИ
let isChecked = false,
    isClose = false;
console.log(isChecked && isClose); //AND
console.log(isChecked || isClose); //OR

//! - оператор отрицания. Превращает true в false и наоборот
console.log(isChecked || !isClose);

//порядок выполнения операндов - таблица!!!

// 'use strict' - строка, показывающая, что мы пишем на стандарте ES6. Исправлены ошибки всякие.
