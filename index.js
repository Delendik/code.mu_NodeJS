const express = require('express');
const router = require('./router.js'); // импортируем роутер
const bodyParser = require('body-parser'); 

const { PORT = 3000 } = process.env;
const app = express();

app.use('/', router); // запускаем

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`);
}); 

app.use(bodyParser.json()); // для собирания JSON-формата
app.use(bodyParser.urlencoded({ extended: true })); // для приёма веб-страниц внутри POST-запроса 

//Запустите цикл и его помощью выведите в консоль числа от 1 до 10.
// for (let i=1; i<11; i++){
//     console.log(i);
// }

//Запустите таймер и его помощью каждую секунду выводите в консоль восклицательный знак.
// setInterval(()=>{
//     console.log('!')
// }, 1000)

//Запустите таймер, который каждую секунду будет выводить в консоль текущий момент времени.
// setInterval(()=>{
//     console.log(new Date())
// }, 1000)

//Пусть дана переменная, в которой изначально хранится число 1. Запустите таймер, который каждую секунду будет увеличивать значение этой переменной на 1 и выводить это значение в консоль.
let numb = 1;
setInterval(()=>{
    console.log(numb+=1)
}, 1000)