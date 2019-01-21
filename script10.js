'use strict';

//Создание нового объекта
let obj = new Object (); // не используемый способ в основном
//объект обязательно содержит пару КЛЮЧ - ЗНАЧЕНИЕ. Это задает свойства объекта
let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

//получение свойства
console.log(options.name);
//задавание свойства
options.bool = false;
//вложение объекта в объект
options.colors = {
    border: "black",
    bg: "red"
};
//вывод всего объекта
console.log(options);

//Удаление свойства
delete(options.bool);
console.log(options);

//перебор всех свойств объекта
for (let key in options) {
    console.log("Свойство " + key + " имеет значение " + options[key]);
}

//количество свойств объекта
console.log(Object.keys(options).length);

//функции, записанные в объект - методы объекта - то, что умеет делать объект
