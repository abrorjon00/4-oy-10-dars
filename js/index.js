// Stringga oid masalalar
// 1-masala

// function counter(str) {
//     let count = 0;
//     for (let i of str) {
//         if (i === 'a' || i === 'A') {
//             count++;
//         }
//     }
//     return count;
// }
// console.log(counter("Assalomu alaykum")); // 4

// 2-masala
// function lastThreeChars(str) {
//     if (str.length < 3);
//     return str.slice(-3);
// }


// console.log(lastThreeChars("salam")); // "lam"


// 3-masala
// let str = 'hello and googbye'; // Hello And Goodbye
// let resArray = str.split(' ');
// let res = resArray.map(function(v) {
//     return v[0].toUpperCase() + v.slice(1);

// })
// console.log(res.join(' '));

// 6-masala
// function countCharacters(str) {
//     return str.length;
// }


// console.log(countCharacters("salom")); // 5

// 7-masala

// function repeatString(str) {
//     return str.repeat(3);
// }


// console.log(repeatString("hello")); // "hellohellohello"

// 8-masala
// function extractNumbers(str) {
//     return str.replace(/\D/g, '');
// }


// console.log(extractNumbers("sa1lo2m23")); // "123"

// 10-masala

// function containsJS(str) {
//     return str.includes('sa');
// }


// console.log(containsJS("salom")); // true



// Massivlarga oid masalalar
// 1-masala
// function maxElement(arr) {
//     return Math.max(...arr);
// }

// // Misol
// console.log(maxElement([1, 2, 3, 4, 5])); // 5
// 2-masala

// function evenNumbers(arr) {
//     return arr.filter(num => num % 2 === 0);
// }


// console.log(evenNumbers([1, 2, 3, 4, 5])); // [2, 4]
// 3-masala
// function sumArray(arr)    {
//     let sum = 0;
//     arr.forEach(num => {
//         sum += num;
//     });
//     return sum;
// }


// console.log(sumArray([1, 2, 3, 4, 5])); // 15

// 4-masala

// function doubleArray(arr) {
//     let result = [];
//     arr.forEach(function(v) {
//     result.push(v * 2);
//     })
//     return result;

// }

// console.log(doubleArray([1, 2, 3, 4, 5])); // [2, 4, 6, 8, 10]


// 5-masala

// function removeNegativeNumbers(arr) {
//     let result = [];
//     arr.forEach(function(num) {
//         if (num >= 0) {
//             result.push(num);
//         }
//     })
       

//     return result;
// }

// console.log(removeNegativeNumbers([1, -2, 3, -4, 5])); // [1, 3, 5]

// 7-masala

// function concatenateArrays(arr1, arr2) {
//     let result = [...arr1];
//     arr2.forEach(function(num) {
//           result.push(num);
//     })
//     return result;
// }

// 
// console.log(concatenateArrays([1, 2], [3, 4])); // [1, 2, 3, 4]

// 8-masala
// function reverseArray(arr) {
//     let result = [];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         result.push(arr[i]);
//     }
//     return result;
// }

// 
// console.log(reverseArray([1, 2, 3, 4, 5])); // [5, 4, 3, 2, 1]

// 9-masala
// function oddIndexedElements(arr) {
//     let result = [];
//     arr.forEach(function(num, index) {
//         if (index % 2 !== 0) {
//             result.push(num);
//         }
//     })
//     return result;
// }


// console.log(oddIndexedElements([0, 1, 2, 3, 4, 5])); // [1, 3, 5]




// const people = [
//     { name: "Ali", age: 25 },
//     { name: "Vali", age: 30 },
//     { name: "Hasan", age: 28 }
// ];

// function getOldestPersonName(people) {
//     let oldestPerson = people[0];
//     people.forEach(person => {
//         if (person.age > oldestPerson.age) {
//             oldestPerson = person;
//         }
//     });
//     return oldestPerson.name;
// }

// console.log(getOldestPersonName(people)); // Vali
