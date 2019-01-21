'use strict';

if (2*4 == 9) {
    console.log("Right!")
} else {
    console.log("Wrong!")
}

if (1) {
    console.log("Right!")
} else {
    console.log("Wrong!")
}

let num = 50;
if (num < 49) {
    console.log("Wrong!")
} else if (num > 100) {
    console.log("Too many!")
} else {
    console.log("Right!")
}

//тернарный оператор - учавствует 3 аргумента. Условие ? успех : неудача
(num == 50) ? console.log("Right!") : console.log("Wrong!");
//бинарный оператор (2+2) - два агрумента, унарный - один агрумент (декремент и инкремент)

//switch поддерживает несколько операторов if
switch (num) {
    case num < 49: 
        console.log("Wrong!");
        break;
    case num > 100:
        console.log("Too many!");
        break;
    case num > 80:
        console.log("Still too many!");
        break;
    case 50: // не num == 50 !!!!
        console.log("Right!");
        break;
    default:
        console.log("Something go wrong!");
        break;
}
