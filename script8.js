'use strict';
let num = 20; // global

function showFirstMessage (text) {
    alert(text);
    //let num = 20; // local, другая переменная
    num = 10; //переопределение
}
//анонимные функции (без имени) используются здесь и сейчас, не могут быть использованы далее

showFirstMessage("Texttt");
console.log(num);
//переменные, объявленые внутри функции, будут доступны только внутри функции

//замыкание - функция со всеми ее внешними и внутренними переменными !!!

//возвращение значения функцией
//function decoration - функция, которая объявлена в потоке кода. Такие функции создаются до начала кода и могут вызываться до объявления
console.log(calc(3,4));
function calc(a,b) {
    return a+b;
}

console.log(calc(10,-4));
console.log(calc(5,-5));

//возвращение локальной переменной
function retVar() {
    let num = 60;
    return num;
}
let anotherVar = retVar();
console.log(anotherVar);

//function expresion - когда функцию присваиваем в переменную, ее нельзя вызвать заранее. 
//Функциональное выражение, создаеся только, когда код до нее доходит
//console.log(calc2(3,4));
let calc2 = function (a,b) {
    return a+b;
}
console.log(calc2(3,4));

//стандарт  ES6 - стрелочная функция. Она не имеет контекста вызова. ЕЕ используют чаще всего в обработчиках событий
let calc3 = (a,b) => a+b;
console.log(calc3(3,4));

//вспомогательные методы и свойства у строк и чисел
let str = "test";
console.log(str.length);
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let twelve = "12.2px";
//console.log(Math.round(twelve));

//преобразование в строку или в число
console.log(parseInt(twelve));
console.log(parseFloat(twelve));