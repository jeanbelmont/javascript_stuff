/****************************
 * LOCAL STORAGE WTH MUTIPLE VALUES IN SAME KEY
 ****************************/


// JSON.stringify(), JSON.parse

const friends = ['john', 'peter', 'bob', 'jackie', 'jane', 'datura'];

localStorage.setItem('friends', JSON.stringify(friends));

const values = JSON.parse(localStorage.getItem('friends'));
console.log(values[2]);

let fruits;

if (localStorage.getItem('fruits')) {
    fruits = JSON.parse(localStorage.getItem('fruits'));
} else {
    fruits = [];
}
console.log(fruits);
// fruits.push('apple');
fruits.push('orange');
localStorage.setItem('fruits', JSON.stringify(fruits));

let counter = 0;

console.log(friends.indexOf('jackie'));
