'use strict';

function first(){

    // функция, которая делает задержку на пол секунды
    setTimeout( function(){
        console.log(1);
    }, 500);
}

function second() {
    console.log(2);
}

first();
second();

//callback - функция, которая должна быть выполнена после того, как выполнилась другая функция
function learnJS(lang, callback) {
    console.log("Я учу " + lang);
    callback();
}
learnJS("JavaScript", function() {
    console.log("Я прошел 3 урок"); //выполнилась четко после выполнения первой
})

//вызов функции-callback извне
function done() {
    console.log("Я прошел 3 урок");
}
learnJS("JavaScript", done);
