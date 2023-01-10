"use strict";

// alert(1)
// console.log(4/0)
// confirm("sdjfksdfkl")
// prompt("dsklfjc,;lscd", "")

// let answers = [],
//     questions = [
//         "What is your name?",
//         "What is your surname?",
//         "How old are you?"
//     ];


// do {
//     console.log(answers);
//     answers++;
// } while (answers<questions.length);

//for (let i = 0; i < questions.length; i++) {
//    answers[i] = prompt(questions[i], "");
//}

//let answers = [];

//answers[0] = prompt("What is your name", "");
//answers[1] = prompt("What is your surname", "");
//answers[2] = prompt("How old are you", "");

// document.write(answers);

//for (let i = 0; i < 10; i++) {
//    console.log(i);
//};

//let i = 0;
//do {
//    console.log(i);
//    i++;
//} while (i<10);

//let = 0;
//while (i<10) {
//    console.log(i);
//    i++;
//}

// switch (age) {
//     case "18":
//         alert("You can come in");
//         break;
//     case "100":
//         alert("You are too old");
//         break;
//     default:
//         alert("I don`t know this answer");
// }

// function humanSayHello() {
//     console.log("Hello World");
// }

// humanSayHello();


// function humanSayHello(user) {
//     console.log("Hello " + user + "!");
// }

// humanSayHello("Igor");

// function calc(a, b) {
//     console.log(a + b);
// }

// calc(4, 5);



// let calc = function(a, b) {
//     return a + b;
// };

// console.log(calc(5, 5));



// function myFirstApp(name, age) {
//     alert(`Hello, my name is ${name}, I'm ${age} and this is my first programm!`);

//     function showSkills() {
//         let skills = ['ntml', 'css', 'js'];
//         alert(`I can operate with ${skills}!`)
//     };
//     showSkills()

//     function checkAge() {
//         let i = age;
//         if (i>18) {
//             alert(`You are good, man!`);
//         } else {
//             alert(`Perfect, man!!!`)
//         }
//     };
//     checkAge(age)

//     function calcPow(num) {
//         consol.log(num*num);
//     }
//     calcPow(4)
    
// }

// myFirstApp("Igor", 33);


// const arr = ['a', 'b', 'c'];
// const arrObj = {
//     0: 'a',
//     1: 'b',
//     2: 'c'
// };

// arrObj[`b`] = 'd';

// console.log(arrObj[`b`]);

// const answer = +prompt('are you 18?', '18');
// console.log(typeof(answer));

// const answers = [];

// answers[0] = prompt('What is your name?', '');
// answers[1] = prompt('What is your surname?', '');
// answers[2] = prompt('What is your age?', '');

// // document.write(answers);
// console.log(typeof(answers));

// const category = 'toys';
// console.log(`https://someurl.com/${category}/5`);

// const user = "Igor";

// alert(`Hey, ${user}`);

// let incr = 10,
//     decr = 10;

// incr++; 
// decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(2 + 2 * 2 === 8);


// const isChecked = true,
//     isClose = false;

// console.log(isChecked || isClose); - or
// console.log(isChecked && isClose); - and

// let num = 50;
// if (num <49) {
//     console.log('Error!');
// } else if (num>100) {
//     console.log('Error again');
// } else {
//     console.log('Ok!');
// }


// let num = 50;
// (num === 50) ? console.log('Ok!') : console.log('Error');

// switch (num) {
//     case 49:
//         console.log('Wrong');
//         break;
//     case 100:
//         console.log('Wrong');
//         break;
//     case 50:
//         console.log('Yes');
//         break;
//     default:
//         console.log('Wrong again');
//         break;
// }

// const hamburger = true;
// const fries = true;

// if (hamburger && fries) {
//     console.log('I`m full!');
// }

// console.log((hamburger && fries));

// const hamburger = 2;
// const fries = 1;
// const cola = 0;

// console.log(hamburger === 3 && cola && fries);

// if (hamburger === 3 && cola ===1 && fries) {
//     console.log('I`m full!');
// } else {
//     console.log('Go home!');
// }

// console.log((hamburger && fries));

// console.log(1 && 0);
// console.log(1 && 5);
// console.log(null && 0);
// console.log(0 && 'sdfjkldsfladjvckajoik');

// const hamburger = 2;
// const fries = 3;
// const cola = 2;
// const nuggets = 2;

// if (hamburger === 3 && cola === 2 || fries === 3 && nuggets) {
//     console.log('we will stay!');
// } else {
//     console.log('Go home!');
// }

// console.log(hamburger === 3 && cola === 2 || fries === 3 && nuggets);

// let num = 50;

// while (num < 55) {
//     console.log(num);
//     num++;
// }

// do {
//     console.log(num);
//     num++;

// }
// while (num<55);

// for (let i = 1; i<8; i++) {
//     console.log(i);
// }

// let num = 50;
// for (let i = 1; i<8; i++) {
//     console.log(num);
//     num++;
// }

// for (let i = 1; i<8; i++) {
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);
// }


// for (let i = 1; i<3; i++) {
//     console.log(i);
//     for (let j = 0; j<3; j++) {
//         console.log(j);
//     }
// }

// let result = '';
// const leng = 7;

// for (let i =1; i<leng; i++) {
//     for (let j = 0; j<i; j++) {
//         result += "*";
//     }
//     result += '\n';
// }
// console.log(result);

// *
// **
// ***
// ****
// *****
// ******


// let result = '';
// const leng = 7;

// first: for (let i = 0; i<3; i++) {
//     console.log(`First level: ${i}`);
//     for (let j = 0; j<3; j++) {
//         console.log(`Second level: ${j}`);
//         for (let k = 0; k<3; k++) {
//             if (k === 2) continue first;
//             console.log(`Third level: ${k}`);
//         }
//     }
// }
// console.log(result);


// function showFirstMessage() {
//     console.log("Hello World!");
// }

// showFirstMessage();

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr) {
//     return curr * amount;
// }

// function promotion(result) {
//     console.log(result * discount);
//     return function() {}
// }

// const res = convert(500, usdCurr);
// promotion(res);



// function test() {
//     for (let i = 0; i < 5; i++) {
//         console.log(i);
//         if (i === 3) return;
//     }
//     console.log('done');
// }
// test();


// Место для первой задачи
// function sayHello(name) {
//     return (`Привет, ${name}!`);
// }

// Место для второй задачи
// function returnNeighboringNumbers(num) {
//     return [num - 1, num, num + 1];
// }

// Место для третьей задачи
// function getMathResult(num1, num2) {
//     if (typeof(num2) !== 'number' || num2 <= 0) {
//         return num1;
//     }
    
//     let str = '';
    
//     for (let i = 1; i <= num2; i++) {
//         if (i === num2) {
//             str += `${num1 * i}`;
//         } else {
//             str += `${num1 * i}---`;
//         }
//     }
//     return str

// }

// function first() {
//     setTimeout(function() {
//         console.log(1);
//     }, 500);
// }

// function second() {
//     console.log(2);
// }

// first();
// second();

// function learnJS(lang, callback) {
//     console.log(`I' study ${lang}`);
//     callback();
// }

// function done() {
//     console.log('I have finished this lesson');
// }

// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     heigth: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     makeTest: function() {
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;

// console.log(border);


// console.log(Object.keys(options).length);

// console.log(options.name);

// delete options.name;

// console.log(options);

// let counter = 0;
// for (let key in options) {
//     if (typeof(options[key]) === 'object') {
//         for (let i in options[key]) {
//             console.log(`Options ${i} have meaning ${options[key][i]}`);
//             counter++;
//         }
//     } else {
//     console.log(`Options ${key} have meaning ${options[key]}`);
//     counter++;
//     }
// }

// console.log(counter);


// const arr = [1, 2, 4, 6, 8];

// arr.pop();
// arr.push(10);

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// for (let value of arr) {
//     console.log(value);
// }

// arr.forEach(function(item, i, arr) {
//     console.log(`${i}: ${item} inside arrey ${arr}`);
// });

// const str = prompt ('', '');
// const products = str.split(', ');
// products.sort(compareNum);
// console.log(products.join('; '));

// function compareNum(a, b) {
//     return a - b;
// }



// function copy(mainObj) {
//     let objCopy = {};
//     let key;
//     for (key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 4,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };
// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// console.log(newNumbers);
// console.log(numbers);

// const add = {
//     r: 17,
//     i: 20,
// };

// const clone = Object.assign({}, add);
// console.log(Object.assign(numbers, add));

// clone.r = 20;

// console.log(add);
// console.log(clone);

// const oldArray = ['a', 'b', 'c'];
// const newArrey = oldArray.slice();

// newArrey[1] = 'dskjlsc';
// console.log(oldArray);
// console.log(newArrey);

// const video = ['youtube', 'vimeo', 'rutube'],
//     blogs = ['wordpress', 'livejournal', 'blogger'],
//     internet = [...video, ...blogs, 'bk', 'facebook'];

// console.log(internet);

// function log(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);

// }

// const num = [2, 5, 7];

// log(...num);

// const array = ['a', 'b'];

// const newArr = [...array];

// const neww = {
//     one: 1,
//     two: 2,
//     three: 3
// };
// const newWew = {...neww};

// let str = "some";
// let strObj = new String(str);

// console.log([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armour: 100,
//     sayHello: function() {
//         console.log("Hello");
//     }
// };

// const john = Object.create(soldier);

// const john = {
//     health: 100
// };

// Object.setPrototypeOf(john, soldier);

// john.__proto__ = soldier; - старый формат  обьединения данных


// 1) Превратить в строку:
// console.log(typeof(String(null)));
// console.log(typeof(String(4)));

// console.log(typeof(5 + ''));
// console.log(typeof(null + ''));

// const num = 5;

// console.log("https://facebook.com/catalog/" + num);

// const fontSize = 26 + "px";

// 2) Превратить в число:
// console.log(typeof(Number("4")));

// console.log(typeof(+"4"));
// console.log(typeof(parseInt("15px", 10)));

// let answ = +prompt("Hello", "");

// 3) Превратить в булиновое значение:

// 0, '', null, undefined, NaN - false!!!

// let switcher = null;

// if (switcher) {
//     console.log('Working...');
// }

// switcher = 1;

// if (switcher) {
//     console.log('Working...');
// }

// console.log(typeof(Boolean("4")));

// console.log(typeof(!!"1klasdmjweodjm3"));

// let number = 5; debugger

// function logNumber() {
//     let number = 6; debugger
//     console.log(number);
// }

// number = 4

// logNumber(); debugger

// function createCounter() {
//     let counter = 0;

//     const myFunction = function() {
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2, c3);

// let x = 5; alert( x++ ) = 5;

// console.log([ ] + false - null + true) = NaN;

// let y = 1; 
// let x = y = 2; 
// alert(x); = 2;

// console.log([ ] + 1 + 2); = 12;

// alert( "1"[0] ); = 1

// console.log(2 && 1 && null && 0 && undefined); = null

// console.log(!!( a && b )); false to each other
// console.log(a && b); false to each other

// alert( null || 2 && 3 || 4 ); = 3

// let a = [1, 2, 3]; 
// let b = [1, 2, 3];
// console.log(a == b); = false

// alert( +"Infinity" ); = Infinity

// let a = "Ёжик";
// let b = "яблоко";
// console.log(a>b); = false

// console.log(0 || "" || 2 || undefined || true || falsе); = 2


const restorantData = {
    menu: [
        {
            name: 'Salad Caesar',
            price: '14$'
        },
        {
            name: 'Pizza Diavola',
            price: '9$'
        },
        {
            name: 'Beefsteak',
            price: '17$'
        },
        {
            name: 'Napoleon',
            price: '7$'
        }
    ],
    waitors: [
        {name: 'Alice', age: 22}, {name: 'John', age: 24}
    ],
    averageLunchPrice: '20$',
    openNow: true
};

function isOpen(prop) {
    let answer = '';
    prop ? answer = 'Открыто' : answer = 'Закрыто';

    return answer;
}

console.log(isOpen(restorantData.openNow));

function isAverageLunchPriceTrue(fDish, sDish, average) {
    if (+fDish.price.slice(0, -1) + (+sDish.price.slice(0, -1)) < +average.slice(0, -1)) {
        return 'Цена ниже средней';
    } else {
        return 'Цена выше средней';
    }
}

console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));

function transferWaitors(data) {
    const copy = Object.assign({}, data);

    copy.waitors = [{name: 'Mike', age: 32}];
    return copy;
}

transferWaitors(restorantData);