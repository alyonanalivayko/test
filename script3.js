'use strict';
//Модальное окно. Не проверяется в консоли. Пока оно не будет закрыто - скрипт останавливает свою работу
//alert("Hello World");

//confirm - диалоговое окно - предоставляет пользователю вопрос и выбор ответа.
//let answer = confirm("Are you here?");
//при выборе ОК - булево значение true, при выборе ОТМЕНЫ - false
//console.log(answer);

//prompt - диалоговое окно с полем ввода ответа пользователя, потом можно написать значение ответа по умолчанию
let answer = prompt("Есть ли вам 18?", "Да");
//при вводе ответа в результате получим значение этого ответа
console.log(answer);

//ВСЯ ИНФОРМАЦИЯ, КОТОРАЯ ПРИХОДИТ ОТ ПОЛЬЗОВАТЕЛЯ, БУДЕТ В ФОРМАТЕ СТРОКИ
//Проверка на тип данных - typeof
console.log(typeof(answer));
//При проверке null выдает тип объект, хотя это отдельный тип данных
